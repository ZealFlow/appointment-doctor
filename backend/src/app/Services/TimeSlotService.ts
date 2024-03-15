import "reflect-metadata";
import { inject, injectable } from "inversify";
import { TYPES } from "../../config/types";
import { TimeSlotRepositoryInterface } from "../Repositories/Interfaces/TimeSlotRepositoryInterface";
import { TimeSlot } from "../Models/TimeSlot";
import { TimeSlotServiceInterface } from "./Interfaces/TimeSlotServiceInterface";

@injectable()
class TimeSlotService implements TimeSlotServiceInterface {
    protected timeSlotRepositoryInterface: TimeSlotRepositoryInterface;

    constructor (@inject(TYPES.TimeSlotRepositoryInterface) timeSlotRepositoryInterface: TimeSlotRepositoryInterface) {
        this.timeSlotRepositoryInterface = timeSlotRepositoryInterface;
    }

    getAllTimeSlot(option: any): Promise<TimeSlot[] | null> {
        return this.timeSlotRepositoryInterface.getAllTimeSlot(option);
    }
    
    findOne(option: any): Promise<TimeSlot | null> {
        return this.timeSlotRepositoryInterface.findOne(option);
    }

    save(data: TimeSlot): Promise<TimeSlot> {
        return this.timeSlotRepositoryInterface.save(data);
    }
};

export { TimeSlotService };
