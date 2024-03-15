import { UserEntities } from "../../Models/UserEntities";
import { RepositoryInterface } from "./RepositoryInterface";

interface UserEntitiesRepositoryInterface extends RepositoryInterface {
    save(data: UserEntities): Promise<UserEntities>;
    findOne(option: any): Promise<UserEntities | null>;
};

export type { UserEntitiesRepositoryInterface };