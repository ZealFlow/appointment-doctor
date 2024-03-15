import { Router } from "express";
import AppServiceProvider from "../../app/Providers/AppServiceProvider";
import passport from "passport";
import { AuthCustomer } from "../../app/Http/Middleware/Auths/Customer/AuthCustomer";
import { UserController } from "../../app/Http/Controllers/UserController";
import { UserEntitieController } from "../../app/Http/Controllers/UserEntitieController";
require('dotenv').config();

class Profile {
    private authCustomer: AuthCustomer;
    private userController: UserController;
    private userEntityController: UserEntitieController;
    router = Router();

    constructor() {
        this.userController = AppServiceProvider.getContainer().resolve(UserController);
        this.userEntityController = AppServiceProvider.getContainer().resolve(UserEntitieController);
        this.authCustomer = AppServiceProvider.getContainer().resolve(AuthCustomer);
        this.intializeRoutes();
    }

    intializeRoutes() {
        const boundIndex = this.userController.index.bind(this.userController);
        const updateProfile = this.userEntityController.updateProfile.bind(this.userEntityController);
        const userProfile = this.userEntityController.getUserByProfile.bind(this.userEntityController);

        // this.router.get("/profile", passport.authenticate('jwt', { session: false }), boundIndex);
        this.router.post("/update/:user_id", updateProfile);
        this.router.get("/get/:user_id", userProfile);
    }
};

export default new Profile().router;
