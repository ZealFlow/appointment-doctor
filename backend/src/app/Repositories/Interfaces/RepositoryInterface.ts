interface RepositoryInterface {
    getAll(): Promise<any[]>;
    save(data: any): Promise<any>;
    findOne(option: any): Promise<any | null>;
};

export type { RepositoryInterface };