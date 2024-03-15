import { UserCredential } from '../../Models/UserCredential';

interface CredentialServiceInterface {
    save(data: UserCredential): Promise<UserCredential>;
    findOne(option: any): Promise<UserCredential | null>;
};

export type { CredentialServiceInterface };