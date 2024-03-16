import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { CategoryEntity } from './Category.entity';
import { HealthFacilityEntity } from './HealthFacilities.entity';

@Entity({ name: 'tbl_category_health_facilities' })
export class CategoryHealthFacilityEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    category_health_facility_id!: number; 

    @ManyToOne(() => CategoryEntity)
    @JoinColumn({ name: "category_id" })
    categoryEnity!: CategoryEntity;

    @ManyToOne(() => HealthFacilityEntity)
    @JoinColumn({ name: "health_facility_id" })
    healthFacilityEntity!: HealthFacilityEntity;
}