import { Router } from "express";
import { AppointmentController } from "../../../app/Http/Controllers/AppoinmentController";
import AppServiceProvider from "../../../app/Providers/AppServiceProvider";

class Appointment {
    private appointmentController: AppointmentController;
    router = Router();

    constructor() {
        this.appointmentController = AppServiceProvider.getContainer().resolve(AppointmentController);
        this.intializeRoutes();
    }
    
    intializeRoutes() {
        const create = this.appointmentController.create.bind(this.appointmentController);
        const listDoctor = this.appointmentController.getAllAppointment.bind(this.appointmentController);
        const queryAppointment = this.appointmentController.query.bind(this.appointmentController);

        this.router.post("/appointment/create", create);
        this.router.get("/appointment/list-doctor", listDoctor);
        this.router.get("/appointment", queryAppointment);
    }
};

export default new Appointment().router;