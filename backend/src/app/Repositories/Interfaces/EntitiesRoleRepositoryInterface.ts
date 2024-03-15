import { EntitiesRole } from "../../Models/EntitiesRole";
import { RepositoryInterface } from "./RepositoryInterface";

interface EntitiesRoleRepositoryInterface extends RepositoryInterface {
    save(data: EntitiesRole): Promise<EntitiesRole>;
    findOne(option: any): Promise<EntitiesRole | null>;
};

export type { EntitiesRoleRepositoryInterface };