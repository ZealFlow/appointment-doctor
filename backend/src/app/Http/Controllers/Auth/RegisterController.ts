import 'reflect-metadata';
import { UserEntities } from '../../../Models/UserEntities';
import { UserProfile } from './../../../Models/UserProfile';
import { injectable, inject } from 'inversify';
import { Request, Response, request, response } from "express";
import { TYPES } from "../../../../config/types";
import { UserProfileServiceInterface } from '../../../Services/Interfaces/UserProfileServiceInterface';
import bcrypt from 'bcrypt';
import { CredentialServiceInterface } from '../../../Services/Interfaces/CredentialServiceInterface';
import jwt from 'jsonwebtoken';
import { UserCredential } from '../../../Models/UserCredential';
import { UserEntitiesServiceInterface } from '../../../Services/Interfaces/UserEntitiesServiceInterface';
// import fs from 'fs';

// const privateKey = fs.readFileSync('/keys/private.key');
const encodedToken = (user_id: number) => {
    return jwt.sign({
        iss: 'HealthHub',
        sub: user_id,
        ist: Math.floor(Date.now()),
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 3)
    }, process.env.JWT_SECRET as string);
}

@injectable()
class RegisterController {
    protected userProfileServiceInterface: UserProfileServiceInterface;
    protected credentialServiceInterface: CredentialServiceInterface;
    protected userEntitiesServiceInterface: UserEntitiesServiceInterface
    protected userProfileModel: UserProfile;
    protected userEntitiesModel: UserEntities;
    protected credentialModel: UserCredential;

    constructor(
        @inject(TYPES.UserServiceInterface) userProfileServiceInterface: UserProfileServiceInterface,
        @inject(TYPES.CredentialServiceInterface) credentialServiceInterface: CredentialServiceInterface,
        @inject(TYPES.UserEntitiesServiceInterface) userEntitiesServiceInterface: UserEntitiesServiceInterface,
        @inject(TYPES.UserProfile) userProfileModel: UserProfile,
        @inject(TYPES.UserEntities) userEntities: UserEntities,
        @inject(TYPES.Credential) userCredential: UserCredential
    ) {
        this.userProfileServiceInterface = userProfileServiceInterface;
        this.credentialServiceInterface = credentialServiceInterface;
        this.userEntitiesServiceInterface = userEntitiesServiceInterface;
        this.userProfileModel = userProfileModel;
        this.credentialModel = userCredential;
        this.userEntitiesModel = userEntities;
    }

    async index(req: Request, res: Response) {
        const { userProfileData, credentialData } = req.body;

        //hash password
        const saltPassword = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(credentialData.password, saltPassword);

        Object.assign(this.userProfileModel, userProfileData);
        Object.assign(this.credentialModel, { ...credentialData, password_hash: hashPassword, password_salt: saltPassword });


        this.userEntitiesModel.userCredential = this.credentialModel;
        this.userProfileModel.userEntities = this.userEntitiesModel;

        //save userProfile with credential
        await this.userProfileServiceInterface.save(this.userProfileModel);
        await this.userEntitiesServiceInterface.save(this.userProfileModel.userEntities);
        await this.credentialServiceInterface.save(this.userEntitiesModel.userCredential);

        //get token
        const token = encodedToken(this.userProfileModel.user_id);
        return res.status(200).json({ token: token });
    }

    getUserProfile() {
        return this.userProfileModel;
    }
}

export { RegisterController };
