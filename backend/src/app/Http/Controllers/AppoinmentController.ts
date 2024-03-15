import { Schedule } from './../../Models/Schedule';
import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import { Request, Response } from "express";
import { TYPES } from "../../../config/types";
import { AppointmentServiceInterface } from '../../Services/Interfaces/AppointmentServiceInterface';
import { CustomerServiceInterface } from '../../Services/Interfaces/CustomerServiceInterface';
import { TimeSlotServiceInterface } from '../../Services/Interfaces/TimeSlotServiceInterface';
import { Appointment } from '../../Models/Appointment';
import { ScheduleServiceInterface } from '../../Services/Interfaces/ScheduleServiceInterface';
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';
import { buildSchema } from 'graphql';
import { createHandler } from 'graphql-http/lib/use/express';

@injectable()
class AppointmentController {
    protected appointmentServiceInterface: AppointmentServiceInterface;
    protected customerServiceInterface: CustomerServiceInterface;
    protected timeSlotServiceInterface: TimeSlotServiceInterface;
    protected appointmentModel: Appointment;
    protected scheduleServiceInterface: ScheduleServiceInterface;

    constructor(
        @inject(TYPES.AppointmentServiceInterface) appointmentServiceInterface: AppointmentServiceInterface,
        @inject(TYPES.CustomerServiceInterface) customerServiceInterface: CustomerServiceInterface,
        @inject(TYPES.TimeSlotServiceInterface) timeSlotServiceInterface: TimeSlotServiceInterface,
        @inject(TYPES.Appointment) appointmentModel: Appointment,
        @inject(TYPES.ScheduleServiceInterface) scheduleServiceInterface: ScheduleServiceInterface,
    ) {
        this.appointmentServiceInterface = appointmentServiceInterface;
        this.customerServiceInterface = customerServiceInterface;
        this.timeSlotServiceInterface = timeSlotServiceInterface;
        this.appointmentModel = appointmentModel;
        this.scheduleServiceInterface = scheduleServiceInterface;
    }

    async create(req: Request, res: Response) {
        const { description, did, time, tslid, ...otherProps } = req.body;
        const infoCustomer = { infoCustomer: otherProps };
        console.log(req.body);
        console.log(infoCustomer);

        const timeSlot = await this.timeSlotServiceInterface.findOne({ period: time });
        if (timeSlot) {
            console.log(description);

            const customer = await this.customerServiceInterface.save(infoCustomer.infoCustomer);

            const appointmentData: any = {
                appointment_description: description,
                customer: customer,
                timeSlot: timeSlot,
                status: 2
            };

            await this.appointmentServiceInterface.save(appointmentData);
        }

        return res.status(200).json("success");
    }

    async getAllAppointment(req: Request, res: Response) {
        const listAppointments = await this.appointmentServiceInterface.getAllAppointment({});
        return res.status(200).json(listAppointments);
    }

    async getAllCustomerAppointment(req: Request, res: Response) {
        const listAppointments = await this.appointmentServiceInterface.getAllAppointment({});
        const customerAll = await this.customerServiceInterface.getAllCustomer({});

        const schema = new GraphQLSchema({
            query: new GraphQLObjectType({
                name: 'Query',
                fields: {
                    hello: {
                        type: GraphQLString,
                        resolve: () => 'world',
                    },
                },
            }),
        });

        return res.status(200).json({ customerAll, listAppointments, schema });
    }

    async query(req: Request, res: Response) {
        const getQuery = { ...req.body };
        console.log(getQuery);

        return res.status(200).json({ getQuery });
    }
};

export { AppointmentController };