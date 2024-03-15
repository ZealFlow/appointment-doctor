import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "../../config/types";

class AppServiceProvider {
    private container: Container;

    constructor() {
        this.container = new Container();
        this.register();
    }

    public register() {
       
    }

    public getContainer(): Container {
        return this.container;
    }
}

export default new AppServiceProvider;
