import Checkup from "../../Models/Checkup";

interface CheckupServiceInterface {
    save(data: Checkup): Promise<Checkup>;
    findOne(option: any): Promise<Checkup | null>;
    getAllService(option: any): Promise<Checkup[] | null>;
};

export type { CheckupServiceInterface };