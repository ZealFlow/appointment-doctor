import { Appointment } from "../../Models/Appointment";
import { RepositoryInterface } from "./RepositoryInterface";

interface AppointmentRepositoryInterface extends RepositoryInterface {
    save(data: Appointment): Promise<Appointment>;
    findOne(option: any): Promise<Appointment | null>;
    getAllAppointment(option: any): Promise<Appointment[] | null>;
};

export type { AppointmentRepositoryInterface };