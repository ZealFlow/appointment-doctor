import { BaseRepository } from "./BaseRepository";
import { injectable } from "inversify";
import { Schedule } from "../Models/Schedule";
import { ScheduleRepositoryInterface } from "./Interfaces/ScheduleRepositoryInterface";


@injectable()
class ScheduleRepository extends BaseRepository implements ScheduleRepositoryInterface {
    getModel() { 
        return Schedule;  
    }

    async save(data: Schedule): Promise<Schedule> {
        return await Schedule.save(data);
    }

    async findOne(option: any): Promise<Schedule | null> {
        return await this.getModel().findOne({ where: option });
    }

    async getAllSchedule(option: any): Promise<Schedule[] | null> {
        return await this.getModel().find({ where: option });
    }
}

export { ScheduleRepository }