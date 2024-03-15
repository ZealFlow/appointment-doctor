import { Router } from "express";
import AppServiceProvider from "../../app/Providers/AppServiceProvider";
import { CheckupController } from "../../app/Http/Controllers/CheckupController";
require('dotenv').config();

class Checkup {
    private checkupController: CheckupController;
    router = Router();

    constructor() {
        this.checkupController = AppServiceProvider.getContainer().resolve(CheckupController);
        this.intializeRoutes();
    }

    intializeRoutes() {
        //Index
        const boundIndex = this.checkupController.getServiceByCheckup.bind(this.checkupController);
        
        //Get All Schedule Doctor
        const getServiceByCheckup = this.checkupController.getServiceByCheckup.bind(this.checkupController);
        this.router.get("/detail", getServiceByCheckup);
    }
};

export default new Checkup().router;
