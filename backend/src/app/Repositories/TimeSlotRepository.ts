import { TimeSlot } from "../Models/TimeSlot";
import { BaseRepository } from "./BaseRepository";
import { injectable } from "inversify";
import { TimeSlotRepositoryInterface } from "./Interfaces/TimeSlotRepositoryInterface";

@injectable()
class TimeSlotRepository extends BaseRepository implements TimeSlotRepositoryInterface {
    getModel() { 
        return TimeSlot;  
    }

    async save(data: TimeSlot): Promise<TimeSlot> {
        return await TimeSlot.save(data);
    }

    async findOne(option: any): Promise<TimeSlot | null> {
        return await this.getModel().findOne({ where: option });
    }

    async getAllTimeSlot(option: any): Promise<TimeSlot[] | null> {
        return await this.getModel().find({ where: option });
    }
}

export { TimeSlotRepository }
