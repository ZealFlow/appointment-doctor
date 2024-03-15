// import { Verification } from './Verification';
// import passport from 'passport';
// import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
// import { UserProfileServiceInterface } from '../../Services/Interfaces/UserProfileServiceInterface';
// import { TYPES } from '../../../config/types';
// import { inject, injectable } from 'inversify';
// import dotenv from "dotenv";
// dotenv.config();
// import { CredentialServiceInterface } from '../../Services/Interfaces/CredentialServiceInterface';
// import AppServiceProvider from '../../Providers/AppServiceProvider';
// import { error } from 'console';
// import { Strategy as LocalStrategy } from 'passport-local';

// @injectable()
// export class Authentication {
//     protected userProfileServiceInterface: UserProfileServiceInterface;
//     protected credentialServiceInterface: CredentialServiceInterface;
//     protected verification: Verification;

//     constructor(
//         @inject(TYPES.UserServiceInterface) userProfileServiceInterface: UserProfileServiceInterface,
//         @inject(TYPES.CredentialServiceInterface) credentialServiceInterface: CredentialServiceInterface,
//     ) {
//         this.userProfileServiceInterface = userProfileServiceInterface;
//         this.credentialServiceInterface = credentialServiceInterface;
//         this.verification = AppServiceProvider.getContainer().resolve(Verification);
//         this.config();
//     }

//     config() {
//         passport.use(new JwtStrategy({
//             jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//             secretOrKey: process.env.JWT_SECRET as string,
//         }, async (payload, done) => {
//             try {
//                 const UserEntities = await this.userProfileServiceInterface.findOne({ user_id: payload.sub });
//                 console.log(UserEntities);
//                 if (!UserEntities) done(error, false);
//                 done(null, UserEntities?.user_id);
//             } catch (error) {
//                 done(error, false);
//             }
//         }));

//         passport.use(new LocalStrategy({
//             usernameField: 'username',
//             passwordField: 'password'
//         }, async (username, password, done) => {
//             try {

//                 const userprofile = await this.userProfileServiceInterface.findOne({ username });
//                 if (!userprofile) return done(null, false);
//                 console.log(userprofile);
//                 const isUserCorrect = await this.verification.verifiespassword(username, password);

//                 if (!isUserCorrect) return done(null, false, { message: 'Uncorrect username or password' });
//                 done(null, userprofile.user_id);
//             } catch (error) {
//                 done(error, false);
//             }
//         }))
//     }
// };
