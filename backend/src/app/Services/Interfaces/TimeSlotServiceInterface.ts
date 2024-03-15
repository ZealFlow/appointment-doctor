import { TimeSlot } from "../../Models/TimeSlot";

interface TimeSlotServiceInterface {
    save(data: TimeSlot): Promise<TimeSlot>;
    findOne(option: any): Promise<TimeSlot | null>;
    getAllTimeSlot(option: any): Promise<TimeSlot[] | null>;
};

export type { TimeSlotServiceInterface };
