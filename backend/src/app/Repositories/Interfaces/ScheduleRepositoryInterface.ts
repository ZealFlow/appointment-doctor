import { Schedule } from "../../Models/Schedule";
import { RepositoryInterface } from "./RepositoryInterface";

interface ScheduleRepositoryInterface extends RepositoryInterface {
    save(data: Schedule): Promise<Schedule>;
    findOne(option: any): Promise<Schedule | null>;
    getAllSchedule(option: any): Promise<Schedule[] | null>;
};

export type { ScheduleRepositoryInterface };