import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import { Request, Response } from "express";
import { TYPES } from "../../../config/types";
import { CheckupServiceInterface } from '../../Services/Interfaces/CheckupServiceInterface';

@injectable()
class CheckupController {
    protected checkupServiceInterface: CheckupServiceInterface;;

    constructor(
        @inject(TYPES.CheckupServiceInterface) checkupServiceInterface: CheckupServiceInterface
    ) {
        this.checkupServiceInterface = checkupServiceInterface;
    }

    async getServiceByCheckup (req: Request, res: Response) {
        const detailService = await this.checkupServiceInterface.getAllService({});
        return res.status(200).json({detailService});
    }
};

export { CheckupController };