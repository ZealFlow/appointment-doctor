import { Role } from "../../Models/Role";
import { RepositoryInterface } from "./RepositoryInterface";

interface RoleRepositoryInterface extends RepositoryInterface {
    save(data: Role): Promise<Role>;
    findOne(option: any): Promise<Role | null>;
};

export type { RoleRepositoryInterface };
