import Checkup from "../../Models/Checkup";
import { RepositoryInterface } from "./RepositoryInterface";

interface CheckupRepositoryInterface extends RepositoryInterface {
    save(data: Checkup): Promise<Checkup>;
    findOne(option: any): Promise<Checkup | null>;
    getAllService(option: any): Promise<Checkup[] | null>;
};

export type { CheckupRepositoryInterface };