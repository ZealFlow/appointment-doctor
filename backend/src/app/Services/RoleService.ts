import "reflect-metadata";
import { inject, injectable } from "inversify";
import { TYPES } from "../../config/types";
import { Role } from "../Models/Role";
import { RoleRepositoryInterface } from "../Repositories/Interfaces/RoleRepositoryInterface";
import { RoleServiceInterface } from "./Interfaces/RoleServiceInterface";

@injectable()
class RoleService implements RoleServiceInterface {
    protected roleRepositoryInterface: RoleRepositoryInterface;

    constructor (@inject(TYPES.RoleRepositoryInterface) roleRepositoryInterface: RoleRepositoryInterface) {
        this.roleRepositoryInterface = roleRepositoryInterface;
    }
    
    findOne(option: any): Promise<Role | null> {
        return this.roleRepositoryInterface.findOne(option);
    }

    save(data: Role): Promise<Role> {
        return this.roleRepositoryInterface.save(data);
    }
};

export { RoleService };
