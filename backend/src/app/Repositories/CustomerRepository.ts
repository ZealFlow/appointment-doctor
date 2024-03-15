import { Customer } from "../Models/Customer";
import { BaseRepository } from "./BaseRepository";
import { injectable } from "inversify";
import { CustomerRepositoryInterface } from "./Interfaces/CustomerRepositoryInterface";

@injectable()
class CustomerRepository extends BaseRepository implements CustomerRepositoryInterface {
    getModel() { 
        return Customer;  
    }

    async save(data: Customer): Promise<Customer> {
        return await Customer.save(data);
    }

    async findOne(option: any): Promise<Customer | null> {
        return await this.getModel().findOne({ where: option });
    }

    async getAllCustomer(option: any): Promise<Customer[] | null> {
        return await this.getModel().find({ where: option });
    }
}

export { CustomerRepository }