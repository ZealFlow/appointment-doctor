import { BaseRepository } from "./BaseRepository";
import { injectable } from "inversify";
import { EntitiesRoleRepositoryInterface } from './Interfaces/EntitiesRoleRepositoryInterface';
import { EntitiesRole } from '../Models/EntitiesRole';

@injectable()
class EntitiesRoleRepository extends BaseRepository implements EntitiesRoleRepositoryInterface {
    getModel() { 
        return EntitiesRole;  
    }

    async save(data: EntitiesRole): Promise<EntitiesRole> {
        return await EntitiesRole.save(data);
    }

    async findOne(option: any): Promise<EntitiesRole | null> {
        return await this.getModel().findOne({ where: option });
    }
}

export { EntitiesRoleRepository }
