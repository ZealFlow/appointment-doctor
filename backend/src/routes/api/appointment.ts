import { Router } from "express";
import AppServiceProvider from "../../app/Providers/AppServiceProvider";
import { AppointmentController } from "../../app/Http/Controllers/AppoinmentController";
require('dotenv').config();

class appointment {
    private appointmentController: AppointmentController;
    router = Router();

    constructor() {
        this.appointmentController = AppServiceProvider.getContainer().resolve(AppointmentController);
        this.intializeRoutes();
    }

    intializeRoutes() {
        const create = this.appointmentController.create.bind(this.appointmentController);
        const getAllAppointment = this.appointmentController.getAllAppointment.bind(this.appointmentController);
        const getAllCustomer = this.appointmentController.getAllCustomerAppointment.bind(this.appointmentController);

        this.router.post("/create", create);
        this.router.get("/getAll", getAllAppointment);
        this.router.get("/getAllCustomer", getAllCustomer);
    }
};

export default new appointment().router;