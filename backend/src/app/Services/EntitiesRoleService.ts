import "reflect-metadata";
import { inject, injectable } from "inversify";
import { TYPES } from "../../config/types";
import { EntitiesRoleServiceInterface } from "./Interfaces/EntitiesRoleServiceInterface";
import { EntitiesRoleRepositoryInterface } from "../Repositories/Interfaces/EntitiesRoleRepositoryInterface";
import { EntitiesRole } from "../Models/EntitiesRole";

@injectable()
class EntitiesRoleService implements EntitiesRoleServiceInterface {
    protected entitiesRoleRepositoryInterface: EntitiesRoleRepositoryInterface;

    constructor (@inject(TYPES.EntitiesRoleRepositoryInterface) entitiesRoleRepositoryInterface: EntitiesRoleRepositoryInterface) {
        this.entitiesRoleRepositoryInterface = entitiesRoleRepositoryInterface;
    }
    
    findOne(option: any): Promise<EntitiesRole | null> {
        return this.entitiesRoleRepositoryInterface.findOne(option);
    }

    save(data: EntitiesRole): Promise<EntitiesRole> {
        return this.entitiesRoleRepositoryInterface.save(data);
    }
};

export { EntitiesRoleService };