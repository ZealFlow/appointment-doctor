import { Authentication } from "../../../../Helpers/Auth/Authentication";
import { error } from "console";
import AppServiceProvider from '../../../../Providers/AppServiceProvider';
import { Verification } from '../../Verification';
import { TYPES } from "../../../../../config/types";
import { UserProfileServiceInterface } from "../../../../Services/Interfaces/UserProfileServiceInterface";
import { inject, injectable } from "inversify";
import dotenv from "dotenv";
import { EntitiesRoleServiceInterface } from "../../../../Services/Interfaces/EntitiesRoleServiceInterface";
import { RoleService } from "../../../../Services/RoleService";
import { RoleServiceInterface } from "../../../../Services/Interfaces/RoleServiceInterface";
dotenv.config();

@injectable()
class AuthCustomer extends Authentication {
    protected userProfileServiceInterface: UserProfileServiceInterface;
    protected verification: Verification;
    protected entitiesRoleServiceInterface: EntitiesRoleServiceInterface;
    protected roleServiceInterface: RoleServiceInterface;

    constructor(
        @inject(TYPES.UserServiceInterface) userProfileServiceInterface: UserProfileServiceInterface,
        @inject(TYPES.EntitiesRoleServiceInterface) entitiesRoleServiceInterface: EntitiesRoleServiceInterface,
        @inject(TYPES.RoleServiceInterface) roleServiceInterface: RoleServiceInterface,
    ) {
        super();
        this.userProfileServiceInterface = userProfileServiceInterface;
        this.verification = AppServiceProvider.getContainer().resolve(Verification);
        this.entitiesRoleServiceInterface = entitiesRoleServiceInterface;
        this.roleServiceInterface = roleServiceInterface;
        this.config();
    }

    config() {
        this.configureJwtStrategy(async (payload: any, done: any) => {
            try {
                const UserEntities = await this.userProfileServiceInterface.findOne({ user_id: payload.sub });
                if (!UserEntities) done(error, false);
                done(null, UserEntities?.user_id);
            } catch (error) {
                done(error, false);
            }
        });

        this.configureLocalStrategy(async (username: any, password: any, done: any) => {
            try {
                const userprofile = await this.userProfileServiceInterface.findOne({ username });

                if (!userprofile) return done(null, false);

                const roleEntites = await this.entitiesRoleServiceInterface.findOne({ userProfile: { user_id: userprofile.user_id } });
                const roles = await this.roleServiceInterface.findOne({ entitiesRole: { entities_id: roleEntites?.entities_id } });

                const isUserCorrect = await this.verification.verifiespassword(username, password);

                if (!isUserCorrect) return done(null, false, { message: 'Uncorrect username or password' });
                done(null, {user_id: userprofile.user_id, role: roles?.role_id});
            } catch (error) {
                done(error, false);
            }
        });
    }
};

export { AuthCustomer };