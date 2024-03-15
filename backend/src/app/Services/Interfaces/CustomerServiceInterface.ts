import { Customer } from "../../Models/Customer";

interface CustomerServiceInterface {
    save(data: Customer): Promise<Customer>;
    findOne(option: any): Promise<Customer | null>;
    getAllCustomer(option: any): Promise<Customer[] | null>;
};

export type { CustomerServiceInterface };
