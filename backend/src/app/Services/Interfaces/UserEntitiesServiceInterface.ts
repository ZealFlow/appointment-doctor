import { UserEntities } from "../../Models/UserEntities";

interface UserEntitiesServiceInterface {
    save(data: UserEntities): Promise<UserEntities>;
    findOne(option: any): Promise<UserEntities | null>;
};

export type { UserEntitiesServiceInterface };