import { Role } from "../Models/Role";
import { BaseRepository } from "./BaseRepository";
import { injectable } from "inversify";
import { RoleRepositoryInterface } from "./Interfaces/RoleRepositoryInterface";


@injectable()
class RoleRepository extends BaseRepository implements RoleRepositoryInterface {
    getModel() { 
        return Role;  
    }

    async save(data: Role): Promise<Role> {
        return await Role.save(data);
    }

    async findOne(option: any): Promise<Role | null> {
        return await this.getModel().findOne({ where: option });
    }
}

export { RoleRepository }
