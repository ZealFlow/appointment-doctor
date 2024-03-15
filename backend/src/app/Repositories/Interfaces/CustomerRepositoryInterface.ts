import { Customer } from "../../Models/Customer";
import { RepositoryInterface } from "./RepositoryInterface";

interface CustomerRepositoryInterface extends RepositoryInterface {
    save(data: Customer): Promise<Customer>;
    findOne(option: any): Promise<Customer | null>;
    getAllCustomer(option: any): Promise<Customer[] | null>;
};

export type { CustomerRepositoryInterface };