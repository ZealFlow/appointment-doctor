import "reflect-metadata";
import { inject, injectable } from "inversify";
import { TYPES } from "../../config/types";
import { UserEntitiesServiceInterface } from "./Interfaces/UserEntitiesServiceInterface";
import { UserEntitiesRepositoryInterface } from "../Repositories/Interfaces/UserEntitiesRepositoryInterface";
import { UserEntities } from "../Models/UserEntities";

@injectable()
class UserEntitiesService implements UserEntitiesServiceInterface {
    protected userEntitiesRepositoryInterface: UserEntitiesRepositoryInterface;

    constructor (@inject(TYPES.UserEntitiesRepositoryInterface) userEntitiesRepositoryInterface: UserEntitiesRepositoryInterface) {
        this.userEntitiesRepositoryInterface = userEntitiesRepositoryInterface;
    }
    
    findOne(option: any): Promise<UserEntities | null> {
        return this.userEntitiesRepositoryInterface.findOne(option);
    }

    save(data: UserEntities): Promise<UserEntities> {
        return this.userEntitiesRepositoryInterface.save(data);
    }
};

export { UserEntitiesService };
