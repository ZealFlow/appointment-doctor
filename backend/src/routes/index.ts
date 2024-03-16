import { Express } from 'express';
// import newRegisterRoutes from './api/v1/auth/register';
import newLoginRoutes from './api/v1/auth/login';
import newVerifyRoleRoutes from './api/v1/auth/verifyrole';

export default function route (app: Express) {
    // app.use('/auth', newRegisterRoutes);
    app.use('/auth', newLoginRoutes);
    app.use('/auth', newVerifyRoleRoutes);
};
                                                              