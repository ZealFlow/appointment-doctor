import { UserEntities } from "../Models/UserEntities";
import { BaseRepository } from "./BaseRepository";
import { injectable } from "inversify";
import { UserEntitiesRepositoryInterface } from "./Interfaces/UserEntitiesRepositoryInterface";

@injectable()
class UserEntitiesRepository extends BaseRepository implements UserEntitiesRepositoryInterface {
    getModel() {
        return UserEntities;
    }

    async save(data: UserEntities): Promise<UserEntities> {
        return await UserEntities.save(data);
    }

    async findOne(option: any): Promise<UserEntities | null> {
        return await this.getModel().findOne({ where: option });
    }
}

export { UserEntitiesRepository };
