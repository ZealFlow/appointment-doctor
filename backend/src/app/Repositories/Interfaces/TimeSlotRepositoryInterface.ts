import { TimeSlot } from "../../Models/TimeSlot";
import { RepositoryInterface } from "./RepositoryInterface";

interface TimeSlotRepositoryInterface extends RepositoryInterface {
    save(data: TimeSlot): Promise<TimeSlot>;
    findOne(option: any): Promise<TimeSlot | null>;
    getAllTimeSlot(option: any): Promise<TimeSlot[] | null>;
};

export type { TimeSlotRepositoryInterface };
