import { UserProfile } from "../../Models/UserProfile";
import { RepositoryInterface } from "./RepositoryInterface";

interface UserProfileRepositoryInterface extends RepositoryInterface {
    getUsers(): Promise<UserProfile[]>;
    save(data: UserProfile): Promise<UserProfile>;
    findOne(option: any): Promise<UserProfile | null>;
};

export type { UserProfileRepositoryInterface };