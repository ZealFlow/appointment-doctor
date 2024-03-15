import "reflect-metadata";
import { inject, injectable } from "inversify";
import { TYPES } from "../../config/types";
import { ScheduleRepositoryInterface } from "../Repositories/Interfaces/ScheduleRepositoryInterface";
import { ScheduleServiceInterface } from "./Interfaces/ScheduleServiceInterface";
import { Schedule } from "../Models/Schedule";

@injectable()
class ScheduleService implements ScheduleServiceInterface {
    protected scheduleRepositoryInterface: ScheduleRepositoryInterface;

    constructor (@inject(TYPES.ScheduleRepositoryInterface) scheduleRepositoryInterface: ScheduleRepositoryInterface) {
        this.scheduleRepositoryInterface = scheduleRepositoryInterface;
    }
    getAllSchedule(option: any): Promise<Schedule[] | null> {
        return this.scheduleRepositoryInterface.getAllSchedule(option);
    }
    
    findOne(option: any): Promise<Schedule | null> {
        return this.scheduleRepositoryInterface.findOne(option);
    }

    save(data: Schedule): Promise<Schedule> {
        return this.scheduleRepositoryInterface.save(data);
    }
};

export { ScheduleService };