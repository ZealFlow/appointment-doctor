import { Router } from "express";
import { RegisterController } from "../../../app/Http/Controllers/Auth/RegisterController";
import AppServiceProvider from "../../../app/Providers/AppServiceProvider";

class RegisterRoutes {
    private registerController: RegisterController;
    router = Router();

    constructor() {
        this.registerController = AppServiceProvider.getContainer().resolve(RegisterController);
        this.intializeRoutes();
    }

    intializeRoutes() { 
        this.router.post("/register", this.registerController.index.bind(this.registerController));
    }
}

export default new RegisterRoutes().router;