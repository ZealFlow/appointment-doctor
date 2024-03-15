import { BaseRepository } from "./BaseRepository";
import { injectable } from "inversify";
import { AppointmentRepositoryInterface } from "./Interfaces/AppointmentRepositoryInterface";
import { Appointment } from "../Models/Appointment";

@injectable()
class AppointmentRepository extends BaseRepository implements AppointmentRepositoryInterface {
    getModel() { 
        return Appointment;  
    }

    async save(data: Appointment): Promise<Appointment> {
        return await Appointment.save(data);
    }

    async findOne(option: any): Promise<Appointment | null> {
        return await this.getModel().findOne({ where: option });
    }

    async getAllAppointment(option: any): Promise<Appointment[] | null> {
        return await this.getModel().find({ where: option });
    }
}

export { AppointmentRepository }