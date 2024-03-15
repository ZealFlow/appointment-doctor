const TYPES = {
    //Model UserProfile
    UserRepositoryInterface: Symbol.for("UserProfileRepositoryInterface"),
    UserServiceInterface: Symbol.for("UserProfileServiceInterface"),
    UserService: Symbol.for("UserProfileService"),
    UserRepository: Symbol.for("UserProfileRepository"),
    UserProfile: Symbol.for("UserProfile"),

    //Model Credential
    CredentialRepositoryInterface: Symbol.for("CredentialRepositoryInterface"),
    CredentialServiceInterface: Symbol.for("CredentialServiceInterface"),
    CredentialService: Symbol.for("CredentialService"),
    CredentialRepository: Symbol.for("CredentialRepository"),
    Credential: Symbol.for("Credential"),

    //Model UserEntities
    UserEntitiesRepositoryInterface: Symbol.for("UserEntitiesRepositoryInterface"),
    UserEntitiesServiceInterface: Symbol.for("UserEntitiesServiceInterface"),
    UserEntitiesService: Symbol.for("UserEntitiesService"),
    UserEntitiesRepository: Symbol.for("UserEntitiesRepository"),
    UserEntities: Symbol.for("UserEntities"),

    //Model EntitiesRole
    EntitiesRoleRepositoryInterface: Symbol.for("EntitiesRoleRepositoryInterface"),
    EntitiesRoleServiceInterface: Symbol.for("EntitiesRoleServiceInterface"),
    EntitiesRoleService: Symbol.for("EntitiesRoleService"),
    EntitiesRoleRepository: Symbol.for("EntitiesRoleRepository"),
    EntitiesRole: Symbol.for("EntitiesRole"),

    //Model Role
    RoleRepositoryInterface: Symbol.for("RoleRepositoryInterface"),
    RoleServiceInterface: Symbol.for("RoleServiceInterface"),
    RoleService: Symbol.for("RoleService"),
    RoleRepository: Symbol.for("RoleRepository"),
    Role: Symbol.for("Role"),

    //Model Schedule
    ScheduleRepositoryInterface: Symbol.for("ScheduleRepositoryInterface"),
    ScheduleServiceInterface: Symbol.for("ScheduleServiceInterface"),
    ScheduleService: Symbol.for("ScheduleService"),
    ScheduleRepository: Symbol.for("ScheduleRepository"),
    Schedule: Symbol.for("Schedule"),

    //Model TimeSlot
    TimeSlotRepositoryInterface: Symbol.for("TimeSlotRepositoryInterface"),
    TimeSlotServiceInterface: Symbol.for("TimeSlotServiceInterface"),
    TimeSlotService: Symbol.for("TimeSlotService"),
    TimeSlotRepository: Symbol.for("TimeSlotRepository"),
    TimeSlot: Symbol.for("TimeSlot"),

    //Model Checkup
    CheckupRepositoryInterface: Symbol.for("CheckupRepositoryInterface"),
    CheckupServiceInterface: Symbol.for("CheckupServiceInterface"),
    CheckupService: Symbol.for("CheckupService"),
    CheckupRepository: Symbol.for("CheckupRepository"),
    Checkup: Symbol.for("Checkup"),

    //Model Appointment
    AppointmentRepositoryInterface: Symbol.for("AppointmentRepositoryInterface"),
    AppointmentServiceInterface: Symbol.for("AppointmentServiceInterface"),
    AppointmentService: Symbol.for("AppointmentService"),
    AppointmentRepository: Symbol.for("AppointmentRepository"),
    Appointment: Symbol.for("Appointment"),

    //Model Customer
    CustomerRepositoryInterface: Symbol.for("CustomerRepositoryInterface"),
    CustomerServiceInterface: Symbol.for("CustomerServiceInterface"),
    CustomerService: Symbol.for("CustomerService"),
    CustomerRepository: Symbol.for("CustomerRepository"),
    Customer: Symbol.for("Customer"),

    RegisterController: Symbol("RegisterController"),

    //Module Verification
    Verification: Symbol.for("Verification"),
};

export { TYPES };