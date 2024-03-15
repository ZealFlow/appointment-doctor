import { Router } from "express";
import AppServiceProvider from "../../app/Providers/AppServiceProvider";
import { ListDoctorController } from "../../app/Http/Controllers/ListDoctorController";
require('dotenv').config();

class List {
    private listDoctorController: ListDoctorController;
    router = Router();

    constructor() {
        this.listDoctorController = AppServiceProvider.getContainer().resolve(ListDoctorController);
        this.intializeRoutes();
    }

    intializeRoutes() {
        //Index
        const boundIndex = this.listDoctorController.index.bind(this.listDoctorController);
        
        //Get All List Doctor
        const getByListProduct = this.listDoctorController.index.bind(this.listDoctorController);

        this.router.get("/list", getByListProduct);
    }
};

export default new List().router;
