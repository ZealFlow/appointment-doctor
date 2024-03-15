import "reflect-metadata";
import { inject, injectable } from "inversify";
import { UserCredential } from "../Models/UserCredential";
import { TYPES } from "../../config/types";
import Checkup from "../Models/Checkup";
import { CheckupRepositoryInterface } from "../Repositories/Interfaces/CheckupRepositoryInterface";
import { CheckupServiceInterface } from "./Interfaces/CheckupServiceInterface";

@injectable()
class CheckupService implements CheckupServiceInterface {
    protected checkupRepositoryInterface: CheckupRepositoryInterface;

    constructor (@inject(TYPES.CheckupRepositoryInterface) checkupRepositoryInterface: CheckupRepositoryInterface) {
        this.checkupRepositoryInterface = checkupRepositoryInterface;
    }
    
    findOne(option: any): Promise<Checkup | null> {
        return this.checkupRepositoryInterface.findOne(option);
    }

    save(data: Checkup): Promise<Checkup> {
        return this.checkupRepositoryInterface.save(data)
    }

    getAllService(option: any): Promise<Checkup[] | null> {
        return this.checkupRepositoryInterface.getAllService(option);
    }
};

export { CheckupService };
