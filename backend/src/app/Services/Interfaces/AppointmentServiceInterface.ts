import { Appointment } from "../../Models/Appointment";

interface AppointmentServiceInterface {
    save(data: Appointment): Promise<Appointment>;
    findOne(option: any): Promise<Appointment | null>;
    getAllAppointment(option: any): Promise<Appointment[] | null>;
};

export type { AppointmentServiceInterface };
