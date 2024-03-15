import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import { Request, Response } from "express";
import { TYPES } from "../../../config/types";
import { CustomerServiceInterface } from '../../Services/Interfaces/CustomerServiceInterface';

@injectable()
class AppointmentController {
    protected customerServiceInterface: CustomerServiceInterface;
    
    constructor(
        @inject(TYPES.CustomerServiceInterface) customerServiceInterface: CustomerServiceInterface
    ) {
        this.customerServiceInterface = customerServiceInterface;
    }

    async getAllCustomer (req: Request, res: Response) {
        const customerAll = await this.customerServiceInterface.getAllCustomer({});
        return res.status(200).json(customerAll);
    }
};

export { AppointmentController };