import { Role } from "../../Models/Role";

interface RoleServiceInterface {
    save(data: Role): Promise<Role>;
    findOne(option: any): Promise<Role | null>;
};

export type { RoleServiceInterface };
