import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import dotenv from "dotenv";
dotenv.config();
import { Strategy as LocalStrategy } from 'passport-local';
import { injectable } from 'inversify';

@injectable()
class Authentication {
    configureJwtStrategy(callback: any) {
        passport.use(new JwtStrategy({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET as string,
        }, callback));
    }
    
    configureLocalStrategy(callback: any) {
        passport.use(new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password'
        }, callback));
    }
};

export { Authentication };
