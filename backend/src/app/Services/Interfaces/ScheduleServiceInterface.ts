import { Schedule } from "../../Models/Schedule";

interface ScheduleServiceInterface {
    save(data: Schedule): Promise<Schedule>;
    findOne(option: any): Promise<Schedule | null>;
    getAllSchedule(option: any): Promise<Schedule[] | null>;
};

export type { ScheduleServiceInterface };