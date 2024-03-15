import { UserEntities } from './../../Models/UserEntities';
import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import { Request, Response } from "express";
import { TYPES } from "../../../config/types";
import { ScheduleServiceInterface } from '../../Services/Interfaces/ScheduleServiceInterface';
import { Schedule } from '../../Models/Schedule';
import { TimeSlot } from '../../Models/TimeSlot';
import { TimeSlotServiceInterface } from '../../Services/Interfaces/TimeSlotServiceInterface';

@injectable()
class ScheduleController {
    protected scheduleServiceInterface: ScheduleServiceInterface;
    protected timeSlotServiceInterface: TimeSlotServiceInterface;
    protected schedule: Schedule;
    protected timeSlot: TimeSlot;

    constructor(
        @inject(TYPES.ScheduleServiceInterface) scheduleServiceInterface: ScheduleServiceInterface,
        @inject(TYPES.Schedule) scheduleModel: Schedule,
        @inject(TYPES.TimeSlotServiceInterface) timeSlotServiceInterface: TimeSlotServiceInterface,
        @inject(TYPES.TimeSlot) timeSlotModel: TimeSlot
    ) {
        this.scheduleServiceInterface = scheduleServiceInterface;
        this.schedule = scheduleModel;
        this.timeSlotServiceInterface = timeSlotServiceInterface;
        this.timeSlot = timeSlotModel;
    }

    async index(req: Request, res: Response) {
        //Init schedule model Schedule
        this.schedule.datework = req.body.datework;
        this.schedule.starttime = req.body.starttime;
        this.schedule.endtime = req.body.endtime;
        this.schedule.cost = req.body.cost;
        this.schedule.doctor = req.body.doctor_id;

        console.log(req.body.peroid);
    
        console.log(req.body.starttime, req.body.endtime);
        const start = new Date(`1970-01-01T${req.body.starttime}`);
        const end = new Date(`1970-01-01T${req.body.endtime}`);
    
        //Create New Schedule -> Save database
        const newSchedule = await this.scheduleServiceInterface.save(this.schedule);
        console.log(start, end);
        let current = new Date(start);
        while (current <= end) {
            const next = new Date(current);
            next.setMinutes(current.getMinutes() + Number(req.body.peroid));
    
            console.log(current.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
            
            // Create a new TimeSlot instance for each iteration
            const newTimeSlot = new TimeSlot();
            newTimeSlot.period = current.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
            newTimeSlot.schedule = newSchedule;
            
            //Create New TimeSlot -> Save database
            await this.timeSlotServiceInterface.save(newTimeSlot);

            current = next;
        }
    
        return res.status(200).send();
    }
    

    async getSchedules(req: Request, res: Response) {
        const scheduleDoctors = await this.scheduleServiceInterface.getAllSchedule({doctor: {entity_id: req.params.doctor_id}});
        return res.status(200).json(scheduleDoctors);
    }
};

export { ScheduleController };