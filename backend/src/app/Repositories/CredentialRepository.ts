import { UserCredential } from '../Models/UserCredential';
import { BaseRepository } from "./BaseRepository";
import { CredentialRepositoryInterface } from "./Interfaces/CredentialRepositoryInterface";
import { injectable } from "inversify";

@injectable()
class CredentialRepository extends BaseRepository implements CredentialRepositoryInterface {
    getModel() { 
        return UserCredential;  
    }

    async save(data: UserCredential): Promise<UserCredential> {
        return await UserCredential.save(data);
    }

    async findOne(option: any): Promise<UserCredential | null> {
        return await this.getModel().findOne({ where: option });
    }
}

export { CredentialRepository }
