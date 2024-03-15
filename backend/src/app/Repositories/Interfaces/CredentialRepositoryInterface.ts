import { UserCredential } from "../../Models/UserCredential";
import { RepositoryInterface } from "./RepositoryInterface";

interface CredentialRepositoryInterface extends RepositoryInterface {
    save(data: UserCredential): Promise<UserCredential>;
    findOne(option: any): Promise<UserCredential | null>;
};

export type { CredentialRepositoryInterface };