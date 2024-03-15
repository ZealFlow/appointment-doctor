// import { UserProfileServiceInterface } from '../../Services/Interfaces/UserProfileServiceInterface';
// import { TYPES } from '../../../config/types';
// import { CredentialServiceInterface } from '../../Services/Interfaces/CredentialServiceInterface';
// import { inject, injectable } from 'inversify';
// import bcrypt from 'bcrypt';

// @injectable()
// export class Verification {
//     protected userProfileServiceInterface: UserProfileServiceInterface;
//     protected credentialServiceInterface: CredentialServiceInterface;

//     constructor(
//         @inject(TYPES.UserServiceInterface) userProfileServiceInterface: UserProfileServiceInterface,
//         @inject(TYPES.CredentialServiceInterface) credentialServiceInterface: CredentialServiceInterface
//     ) {
//         this.userProfileServiceInterface = userProfileServiceInterface;
//         this.credentialServiceInterface = credentialServiceInterface;
//     }

//     async verifiespassword(username: string, password: string) {
//         const userProfile = await this.userProfileServiceInterface.findOne({ username: username });
//         if (!userProfile) return false;

//         const credential = await this.credentialServiceInterface.findOne({ password_id: userProfile.user_id });
//         if (!credential) return false;

//         return await bcrypt.compare(password, credential.password_hash);
//     }
// };