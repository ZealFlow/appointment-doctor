import Checkup from "../Models/Checkup";
import { BaseRepository } from "./BaseRepository";
import { injectable } from "inversify";
import { CheckupRepositoryInterface } from "./Interfaces/CheckupRepositoryInterface";

@injectable()
class CheckupRepository extends BaseRepository implements CheckupRepositoryInterface {
    getModel() { 
        return Checkup;  
    }

    async save(data: Checkup): Promise<Checkup> {
        return await Checkup.save(data);
    }

    async findOne(option: any): Promise<Checkup | null> {
        return await this.getModel().findOne({ where: option });
    }

    async getAllService(option: any): Promise<Checkup[] | null> {
        return await this.getModel().find({ where: option });
    }
}

export { CheckupRepository }