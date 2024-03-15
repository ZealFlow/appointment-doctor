import { Router } from "express";
import { ScheduleController } from "../../app/Http/Controllers/ScheduleController";
import AppServiceProvider from "../../app/Providers/AppServiceProvider";
require('dotenv').config();

class Schedule {
    private scheduleController: ScheduleController;
    router = Router();

    constructor() {
        this.scheduleController = AppServiceProvider.getContainer().resolve(ScheduleController);
        this.intializeRoutes();
    }

    intializeRoutes() {
        //Index
        const boundIndex = this.scheduleController.index.bind(this.scheduleController);
        
        //Get All Schedule Doctor
        const getAllSchedule = this.scheduleController.getSchedules.bind(this.scheduleController);

        /**
         * Method: POST
         * API: /schedule
         * Description: Create a new schedule for doctor
         */
        this.router.post("/create", boundIndex);

        /**
         * Method: GET
         * Params: doctor_id
         * API: /:doctor_id
         * Description: Get all schedule of doctor
         */
        this.router.get("/:doctor_id", getAllSchedule);
    }
};

export default new Schedule().router;
