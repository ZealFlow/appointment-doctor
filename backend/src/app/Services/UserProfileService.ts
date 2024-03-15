import "reflect-metadata";
import { inject, injectable } from "inversify";
import { UserProfile } from "../Models/UserProfile";
import { UserProfileRepositoryInterface } from "../Repositories/Interfaces/UserProfileRepositoryInterface";
import { UserProfileServiceInterface } from "./Interfaces/UserProfileServiceInterface";
import { TYPES } from "../../config/types";

@injectable()
class UserProfileService implements UserProfileServiceInterface {
    protected userProfileRepositoryInterface: UserProfileRepositoryInterface;

    constructor (@inject(TYPES.UserRepositoryInterface) userProfileRepositoryInterface: UserProfileRepositoryInterface) {
        this.userProfileRepositoryInterface = userProfileRepositoryInterface;
    }
    
    findOne(option: any): Promise<UserProfile | null> {
        return this.userProfileRepositoryInterface.findOne(option);
    }

    save(data: UserProfile): Promise<UserProfile> {
        return this.userProfileRepositoryInterface.save(data);
    }
    
    getAll(): Promise<UserProfile[]> {
        return this.userProfileRepositoryInterface.getAll();
    }
};

export { UserProfileService };
