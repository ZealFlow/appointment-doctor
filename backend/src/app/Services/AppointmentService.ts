import "reflect-metadata";
import { inject, injectable } from "inversify";
import { TYPES } from "../../config/types";
import { AppointmentServiceInterface } from "./Interfaces/AppointmentServiceInterface";
import { AppointmentRepositoryInterface } from "../Repositories/Interfaces/AppointmentRepositoryInterface";
import { Appointment } from "../Models/Appointment";

@injectable()
class AppointmentService implements AppointmentServiceInterface {
    protected appointmentRepositoryInterface: AppointmentRepositoryInterface;

    constructor (@inject(TYPES.AppointmentRepositoryInterface) appointmentRepositoryInterface: AppointmentRepositoryInterface) {
        this.appointmentRepositoryInterface = appointmentRepositoryInterface;
    }
    
    findOne(option: any): Promise<Appointment | null> {
        return this.appointmentRepositoryInterface.findOne(option);
    }

    save(data: Appointment): Promise<Appointment> {
        return this.appointmentRepositoryInterface.save(data)
    }

    getAllAppointment(option: any): Promise<Appointment[] | null> {
        return this.appointmentRepositoryInterface.getAllAppointment(option);
    }
};

export { AppointmentService };