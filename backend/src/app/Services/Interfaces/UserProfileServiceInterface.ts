import { UserProfile } from "../../Models/UserProfile";

interface UserProfileServiceInterface {
    getAll(): Promise<UserProfile[]>;
    save(data: UserProfile): Promise<UserProfile>;
    findOne(option: any): Promise<UserProfile | null>;
};

export type { UserProfileServiceInterface };