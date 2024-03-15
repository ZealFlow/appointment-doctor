import "reflect-metadata";
import { UserCredential } from '../Models/UserCredential';
import { Container } from "inversify";
import { TYPES } from "../../config/types";
import { UserProfileService } from "../Services/UserProfileService";
import { UserProfileRepository } from "../Repositories/UserProfileRepository";
import { UserProfileRepositoryInterface } from "../Repositories/Interfaces/UserProfileRepositoryInterface";
import { UserProfileServiceInterface } from "../Services/Interfaces/UserProfileServiceInterface";
import { UserProfile } from "../Models/UserProfile";
import { CredentialRepositoryInterface } from '../Repositories/Interfaces/CredentialRepositoryInterface';
import { CredentialRepository } from '../Repositories/CredentialRepository';
import { CredentialService } from '../Services/CredentialService';
import { CredentialServiceInterface } from '../Services/Interfaces/CredentialServiceInterface';
import { UserEntitiesRepositoryInterface } from "../Repositories/Interfaces/UserEntitiesRepositoryInterface";
import { UserEntitiesRepository } from "../Repositories/UserEntitiesRepository";
import { UserEntitiesServiceInterface } from "../Services/Interfaces/UserEntitiesServiceInterface";
import { UserEntitiesService } from "../Services/UserEntitiesService";
import { UserEntities } from "../Models/UserEntities";
import { RegisterController } from "../Http/Controllers/Auth/RegisterController";
import { EntitiesRoleServiceInterface } from "../Services/Interfaces/EntitiesRoleServiceInterface";
import { EntitiesRoleService } from "../Services/EntitiesRoleService";
import { EntitiesRoleRepositoryInterface } from "../Repositories/Interfaces/EntitiesRoleRepositoryInterface";
import { EntitiesRoleRepository } from "../Repositories/EntitiesRoleRepository";
import { EntitiesRole } from "../Models/EntitiesRole";
import { RoleService } from "../Services/RoleService";
import { RoleServiceInterface } from "../Services/Interfaces/RoleServiceInterface";
import { RoleRepositoryInterface } from "../Repositories/Interfaces/RoleRepositoryInterface";
import { RoleRepository } from "../Repositories/RoleRepository";
import { Role } from "../Models/Role";
import { ScheduleServiceInterface } from "../Services/Interfaces/ScheduleServiceInterface";
import { ScheduleRepositoryInterface } from "../Repositories/Interfaces/ScheduleRepositoryInterface";
import { ScheduleRepository } from "../Repositories/ScheduleRepository";
import { ScheduleService } from "../Services/ScheduleService";
import { Schedule } from "../Models/Schedule";
import { TimeSlot } from "../Models/TimeSlot";
import { TimeSlotServiceInterface } from "../Services/Interfaces/TimeSlotServiceInterface";
import { TimeSlotService } from "../Services/TimeSlotService";
import { TimeSlotRepository } from "../Repositories/TimeSlotRepository";
import { TimeSlotRepositoryInterface } from "../Repositories/Interfaces/TimeSlotRepositoryInterface";
import { CheckupServiceInterface } from "../Services/Interfaces/CheckupServiceInterface";
import { CheckupRepositoryInterface } from "../Repositories/Interfaces/CheckupRepositoryInterface";
import { CheckupRepository } from "../Repositories/CheckupRepository";
import { CheckupService } from "../Services/CheckupService";
import Checkup from "../Models/Checkup";
import { AppointmentService } from "../Services/AppointmentService";
import { AppointmentRepository } from "../Repositories/AppointmentRepository";
import { AppointmentServiceInterface } from "../Services/Interfaces/AppointmentServiceInterface";
import { AppointmentRepositoryInterface } from "../Repositories/Interfaces/AppointmentRepositoryInterface";
import { Appointment } from "../Models/Appointment";
import { CustomerServiceInterface } from "../Services/Interfaces/CustomerServiceInterface";
import { CustomerRepositoryInterface } from "../Repositories/Interfaces/CustomerRepositoryInterface";
import { CustomerRepository } from "../Repositories/CustomerRepository";
import { CustomerService } from "../Services/CustomerService";
import { Customer } from "../Models/Customer";

class AppServiceProvider {
    private container: Container;

    constructor() {
        this.container = new Container();
        this.register();
    }

    public register() {
        this.container.bind<UserProfileServiceInterface>(TYPES.UserServiceInterface).to(UserProfileService);
        this.container.bind<UserProfileRepositoryInterface>(TYPES.UserRepositoryInterface).to(UserProfileRepository);
        
        this.container.bind<CredentialServiceInterface>(TYPES.CredentialServiceInterface).to(CredentialService);
        this.container.bind<CredentialRepositoryInterface>(TYPES.CredentialRepositoryInterface).to(CredentialRepository);

        this.container.bind<UserEntitiesServiceInterface>(TYPES.UserEntitiesServiceInterface).to(UserEntitiesService);
        this.container.bind<UserEntitiesRepositoryInterface>(TYPES.UserEntitiesRepositoryInterface).to(UserEntitiesRepository);

        this.container.bind<EntitiesRoleServiceInterface>(TYPES.EntitiesRoleServiceInterface).to(EntitiesRoleService);
        this.container.bind<EntitiesRoleRepositoryInterface>(TYPES.EntitiesRoleRepositoryInterface).to(EntitiesRoleRepository);

        this.container.bind<RoleServiceInterface>(TYPES.RoleServiceInterface).to(RoleService);
        this.container.bind<RoleRepositoryInterface>(TYPES.RoleRepositoryInterface).to(RoleRepository);

        this.container.bind<ScheduleServiceInterface>(TYPES.ScheduleServiceInterface).to(ScheduleService);
        this.container.bind<ScheduleRepositoryInterface>(TYPES.ScheduleRepositoryInterface).to(ScheduleRepository);

        this.container.bind<TimeSlotServiceInterface>(TYPES.TimeSlotServiceInterface).to(TimeSlotService);
        this.container.bind<TimeSlotRepositoryInterface>(TYPES.TimeSlotRepositoryInterface).to(TimeSlotRepository);

        this.container.bind<CheckupServiceInterface>(TYPES.CheckupServiceInterface).to(CheckupService);
        this.container.bind<CheckupRepositoryInterface>(TYPES.CheckupRepositoryInterface).to(CheckupRepository);

        this.container.bind<AppointmentServiceInterface>(TYPES.AppointmentServiceInterface).to(AppointmentService);
        this.container.bind<AppointmentRepositoryInterface>(TYPES.AppointmentRepositoryInterface).to(AppointmentRepository);

        this.container.bind<CustomerServiceInterface>(TYPES.CustomerServiceInterface).to(CustomerService);
        this.container.bind<CustomerRepositoryInterface>(TYPES.CustomerRepositoryInterface).to(CustomerRepository);

        this.container.bind(TYPES.Customer).toConstantValue(new Customer());
        this.container.bind(TYPES.Appointment).toConstantValue(new Appointment());
        this.container.bind(TYPES.UserProfile).toConstantValue(new UserProfile());
        this.container.bind(TYPES.Credential).toConstantValue(new UserCredential());
        this.container.bind(TYPES.UserEntities).toConstantValue(new UserEntities());
        this.container.bind(TYPES.EntitiesRole).toConstantValue(new EntitiesRole());
        this.container.bind(TYPES.Role).toConstantValue(new Role());
        this.container.bind(TYPES.Schedule).toConstantValue(new Schedule());
        this.container.bind(TYPES.TimeSlot).toConstantValue(new TimeSlot());
        this.container.bind(TYPES.Checkup).toConstantValue(new Checkup());

        this.container.bind<RegisterController>(TYPES.RegisterController).to(RegisterController);
    }

    public getContainer(): Container {
        return this.container;
    }
}

export default new AppServiceProvider;
