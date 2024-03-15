import { Router } from "express";
import AppServiceProvider from "../../app/Providers/AppServiceProvider";
import { TimeSlotController } from "../../app/Http/Controllers/TimeSlotController";
require('dotenv').config();

class TimeSlot {
    private timeSlotController: TimeSlotController;
    router = Router();

    constructor() {
        this.timeSlotController = AppServiceProvider.getContainer().resolve(TimeSlotController);
        this.intializeRoutes();
    }

    intializeRoutes() {
        //Index
        const boundIndex = this.timeSlotController.getTimeSlotAll.bind(this.timeSlotController);

        /**
         * Method: POST
         * API: /timeslot/create
         * Description: Create a new timeslot for doctor
         */
        this.router.get("/timeslot/:medicine_schedule_id", boundIndex);
    }
};

export default new TimeSlot().router;
