import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import { Request, Response } from "express";
import { TYPES } from "../../../../config/types";
import { UserProfileServiceInterface } from '../../../Services/Interfaces/UserProfileServiceInterface';
import jwt from 'jsonwebtoken';

const encodedToken = (user_id: number) => {
    return jwt.sign({
        iss: 'HealthHub',
        sub: user_id,
        ist: Math.floor(Date.now()),
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 3)
    }, process.env.JWT_SECRET as string);
}

@injectable()
class LoginController {
    protected userProfileServiceInterface: UserProfileServiceInterface;

    constructor(
        @inject(TYPES.UserServiceInterface) userProfileServiceInterface: UserProfileServiceInterface
    ) {
        this.userProfileServiceInterface = userProfileServiceInterface;
    }

    async index(req: Request, res: Response) {
        const token = encodedToken(Number(req.user));
        return res.status(200).json({ token: token, role: req.user });
    }
}

export { LoginController };
