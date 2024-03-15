import { UserProfile } from "../Models/UserProfile";
import { BaseRepository } from "./BaseRepository";
import { UserProfileRepositoryInterface } from "./Interfaces/UserProfileRepositoryInterface";
import { injectable } from "inversify";

@injectable()
class UserProfileRepository extends BaseRepository implements UserProfileRepositoryInterface {
    getModel() {
        return UserProfile;
    }

    async getUsers(): Promise<UserProfile[]> {
        return await UserProfile.find();
    }

    async save(data: UserProfile): Promise<UserProfile> {
        return await UserProfile.save(data);
    }

    async findOne(option: any): Promise<UserProfile | null> {
        return await this.getModel().findOne({ where: option });
    }
}

export { UserProfileRepository };
