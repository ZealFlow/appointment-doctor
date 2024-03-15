import { EntitiesRole } from "../../Models/EntitiesRole";

interface EntitiesRoleServiceInterface {
    save(data: EntitiesRole): Promise<EntitiesRole>;
    findOne(option: any): Promise<EntitiesRole | null>;
};

export type { EntitiesRoleServiceInterface };
