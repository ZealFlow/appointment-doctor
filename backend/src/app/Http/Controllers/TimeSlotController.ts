import { UserEntities } from './../../Models/UserEntities';
import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import { Request, Response } from "express";
import { TYPES } from "../../../config/types";
import { TimeSlotServiceInterface } from '../../Services/Interfaces/TimeSlotServiceInterface';
import { TimeSlot } from '../../Models/TimeSlot';

@injectable()
class TimeSlotController {
    protected timeSlotServiceInterface: TimeSlotServiceInterface;
    protected timeSlot: TimeSlot;

    constructor(
        @inject(TYPES.TimeSlotServiceInterface) timeSlotServiceInterface: TimeSlotServiceInterface,
        @inject(TYPES.TimeSlot) timeSlotModel: TimeSlot
    ) {
        this.timeSlotServiceInterface = timeSlotServiceInterface;
        this.timeSlot = timeSlotModel;
    }

    async getTimeSlotAll(req: Request, res: Response) {
        const timeSlots = await this.timeSlotServiceInterface.getAllTimeSlot({schedule: { medicine_schedule_id: req.params.medicine_schedule_id }});
        return res.status(200).json(timeSlots);
    }
};

export { TimeSlotController };