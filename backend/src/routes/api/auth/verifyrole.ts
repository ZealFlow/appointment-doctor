import { Router } from "express";
import AppServiceProvider from "../../../app/Providers/AppServiceProvider";
import { ConfirmRoleController } from "../../../app/Http/Controllers/Auth/ConfirmRoleController";
import passport from "passport";
// import { Authentication } from "../../../../app/Http/Middleware/Authentication";
import { AuthCustomer } from "../../../app/Http/Middleware/Auths/Customer/AuthCustomer";
require('dotenv').config();

class VerifyRoleRoutes {
    private confirmRoleController: ConfirmRoleController;
    private authCustomer: AuthCustomer;
    router = Router();

    constructor() {
        this.confirmRoleController = AppServiceProvider.getContainer().resolve(ConfirmRoleController);
        this.authCustomer = AppServiceProvider.getContainer().resolve(AuthCustomer);
        this.intializeRoutes();
    }

    intializeRoutes() {
        const boundIndex = this.confirmRoleController.index.bind(this.confirmRoleController);

        this.router.get("/verifyrole", passport.authenticate('jwt', { session: false }), boundIndex);
        this.router.post("/verifyrole", passport.authenticate('jwt', { session: false }), boundIndex);
    }
}

export default new VerifyRoleRoutes().router;
