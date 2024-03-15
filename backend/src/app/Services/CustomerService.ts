import "reflect-metadata";
import { inject, injectable } from "inversify";
import { TYPES } from "../../config/types";
import { Customer } from "../Models/Customer";
import { CustomerRepositoryInterface } from "../Repositories/Interfaces/CustomerRepositoryInterface";
import { CustomerServiceInterface } from "./Interfaces/CustomerServiceInterface";

@injectable()
class CustomerService implements CustomerServiceInterface {
    protected customerRepositoryInterface: CustomerRepositoryInterface;

    constructor (@inject(TYPES.CustomerRepositoryInterface) customerRepositoryInterface: CustomerRepositoryInterface) {
        this.customerRepositoryInterface = customerRepositoryInterface;
    }
    
    findOne(option: any): Promise<Customer | null> {
        return this.customerRepositoryInterface.findOne(option);
    }

    save(data: Customer): Promise<Customer> {
        return this.customerRepositoryInterface.save(data)
    }

    getAllCustomer(option: any): Promise<Customer[] | null> {
        return this.customerRepositoryInterface.getAllCustomer(option);
    }
};

export { CustomerService };