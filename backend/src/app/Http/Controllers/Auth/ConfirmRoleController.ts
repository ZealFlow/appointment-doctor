import 'reflect-metadata';
import { inject, injectable } from "inversify";
import { Request, Response} from "express";
import { TYPES } from '../../../../config/types';
import { EntitiesRoleServiceInterface } from '../../../Services/Interfaces/EntitiesRoleServiceInterface';
import { UserProfileServiceInterface } from '../../../Services/Interfaces/UserProfileServiceInterface';
import { RoleServiceInterface } from '../../../Services/Interfaces/RoleServiceInterface';
import { Role } from '../../../Models/Role';
import { EntitiesRole } from '../../../Models/EntitiesRole';
import { UserProfile } from '../../../Models/UserProfile';

@injectable()
class ConfirmRoleController {
    protected entitiesRoleServiceInterface: EntitiesRoleServiceInterface;
    protected userProfileServiceInterface: UserProfileServiceInterface;
    protected roleServiceInterface: RoleServiceInterface;
    protected roleModel: Role;
    protected entitiesRoleModel: EntitiesRole;
    protected userProfileModel: UserProfile;

    constructor (
        @inject(TYPES.EntitiesRoleServiceInterface) entitiesRoleServiceInterface: EntitiesRoleServiceInterface,
        @inject(TYPES.UserServiceInterface) userProfileServiceInterface: UserProfileServiceInterface,
        @inject(TYPES.RoleServiceInterface) roleServiceInterface: RoleServiceInterface,
        @inject(TYPES.EntitiesRole) entitiesRoleModel: EntitiesRole,
        @inject(TYPES.Role) roleModel: Role,
        @inject(TYPES.UserProfile) userProfileModel: UserProfile
    ) {
        this.entitiesRoleServiceInterface = entitiesRoleServiceInterface;
        this.userProfileServiceInterface = userProfileServiceInterface;
        this.roleServiceInterface = roleServiceInterface;
        this.roleModel = roleModel;
        this.entitiesRoleModel = entitiesRoleModel;
        this.userProfileModel = userProfileModel;
    }

    async index(req: Request, res: Response) {
        const data = req.body;
        const user_id = req.user;

        console.log(user_id);
        //set role for user acccount
        if (data.role === 'doctor') this.roleModel.role_id = 2;
        if (data.role === 'customer') this.roleModel.role_id = 3;

        //set id user 
        this.userProfileModel.user_id = Number(user_id); 

        //Set relationship
        this.entitiesRoleModel.userProfile = this.userProfileModel;
        this.entitiesRoleModel.role = this.roleModel;

        //Set role for user
        this.entitiesRoleServiceInterface.save(this.entitiesRoleModel);

        return res.status(200).json({ message: 'Set Role Sucessfull' });
    }
};

export { ConfirmRoleController };