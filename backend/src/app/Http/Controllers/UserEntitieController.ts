import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import { Request, Response } from "express";
import { TYPES } from "../../../config/types";
import { UserEntitiesServiceInterface } from '../../Services/Interfaces/UserEntitiesServiceInterface';
import { UserProfileServiceInterface } from '../../Services/Interfaces/UserProfileServiceInterface';

@injectable()
class UserEntitieController {
    protected userEntitieServiceInterface: UserEntitiesServiceInterface;
    protected userProfileServiceInterface: UserProfileServiceInterface;

    constructor(
        @inject(TYPES.UserEntitiesServiceInterface) userEntitieServiceInterface: UserEntitiesServiceInterface,
        @inject(TYPES.UserServiceInterface) userProfileServiceInterface: UserProfileServiceInterface,
    ) {
        this.userEntitieServiceInterface = userEntitieServiceInterface;
        this.userProfileServiceInterface = userProfileServiceInterface;
    }

    async getUserByProfile(req: Request, res: Response) {
        const userProfile = await this.userEntitieServiceInterface.findOne({ userProfile: { user_id: req.params.user_id } });
        const user = await this.userProfileServiceInterface.findOne({ user_id: req.params.user_id });
        return res.status(200).json({userProfile, user});
    }

    async updateProfile(req: Request, res: Response) {
        const { specialization, academicDegree, organization, position, clinicAddress } = req.body;

        const doctorInfo: any = {
            specialization,
            academicDegree,
            organization,
            position,
            clinicAddress
        };

        //Get User Enity
        const userEntity = await this.userEntitieServiceInterface.findOne({ userProfile: { user_id: req.params.user_id } });
        if (userEntity) {
            userEntity.enity_user = doctorInfo;
            await this.userEntitieServiceInterface.save(userEntity);
        }
        return res.status(200).json('Update Sucess');
    }
};

export { UserEntitieController };