import { Express } from 'express';
import newRegisterRoutes from './api/auth/register';
import newLoginRoutes from './api/auth/login';
import newVerifyRoleRoutes from './api/auth/verifyrole';
import newUserProfile from './api/profile';
import newSchedule from './api/schedule';
import newTimeSlot from './api/timeslot';
import newDetailService from './api/checkup';
import newListDoctor from './api/doctor';
import newAppointmentCreate from './api/appointment';
import newPayByVnpay from './api/payment/vnpay';
import appointmentv2 from './api/v2/Appointment';

export default function route (app: Express) {
    // API version-1
    app.use('/user', newUserProfile);
    app.use('/auth', newRegisterRoutes);
    app.use('/auth', newLoginRoutes);
    app.use('/auth', newVerifyRoleRoutes);
    app.use('/schedule', newSchedule);
    app.use('/schedule', newTimeSlot);
    app.use('/profile', newUserProfile);
    app.use('/medical_service', newDetailService);
    app.use('/doctor', newListDoctor);
    app.use('/appointment', newAppointmentCreate);
    app.use('/payment', newPayByVnpay);

    //API version-2
    app.use('/api/v2', appointmentv2);
};
                                                              