import { RepositoryInterface } from "./Interfaces/RepositoryInterface";
import { injectable } from "inversify";

@injectable()
abstract class BaseRepository implements RepositoryInterface {
    protected model: any;
    
    abstract getModel(): any;

    public initializeModel() {
        if (!this.model) {
            this.setModel();
        }
    }
    
    public setModel() {
        this.model = this.getModel();
    }
    
    async getAll(): Promise<any[]> {
        this.initializeModel();
        return await this.model.find();
    }

    async save(data: any): Promise<any> {
        this.initializeModel();
        return await this.model.save(data);
    } 

    async findOne(option: any): Promise<any> {
        this.initializeModel();
        return await this.model.findOne({ where: option })!;
    }
};

export { BaseRepository };