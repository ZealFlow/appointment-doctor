import { Router } from "express";
import { LoginController } from "../../../app/Http/Controllers/Auth/LoginController";
import AppServiceProvider from "../../../app/Providers/AppServiceProvider";
import passport from "passport";
import { AuthCustomer } from "../../../app/Http/Middleware/Auths/Customer/AuthCustomer";
require('dotenv').config();

class LoginRoutes {
    private loginController: LoginController;
    private authCustomer: AuthCustomer;
    router = Router();

    constructor() {
        this.loginController = AppServiceProvider.getContainer().resolve(LoginController);
        this.authCustomer = AppServiceProvider.getContainer().resolve(AuthCustomer);
        this.intializeRoutes();
    }

    intializeRoutes() {
        this.router.get("/login", passport.authenticate('jwt', { session: false }), this.loginController.index.bind(this.loginController));
        this.router.post("/login", passport.authenticate('local', { session: false }), this.loginController.index.bind(this.loginController));
    }
}

export default new LoginRoutes().router;