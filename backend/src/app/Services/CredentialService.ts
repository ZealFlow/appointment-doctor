import "reflect-metadata";
import { inject, injectable } from "inversify";
import { UserCredential } from "../Models/UserCredential";
import { TYPES } from "../../config/types";
import { CredentialRepositoryInterface } from "../Repositories/Interfaces/CredentialRepositoryInterface";
import { CredentialServiceInterface } from "./Interfaces/CredentialServiceInterface";

@injectable()
class CredentialService implements CredentialServiceInterface {
    protected credentialRepositoryInterface: CredentialRepositoryInterface;

    constructor (@inject(TYPES.CredentialRepositoryInterface) credentialRepositoryInterface: CredentialRepositoryInterface) {
        this.credentialRepositoryInterface = credentialRepositoryInterface;
    }
    
    findOne(option: any): Promise<UserCredential | null> {
        return this.credentialRepositoryInterface.findOne(option);
    }

    save(data: UserCredential): Promise<UserCredential> {
        return this.credentialRepositoryInterface.save(data)
    }
};

export { CredentialService };
