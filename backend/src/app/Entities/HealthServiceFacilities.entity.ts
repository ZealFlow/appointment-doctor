import { CategoryHealthFacilityEntity } from './CategoryHealthFacilities.entity';
import { HealthFacilityEntity } from './HealthFacilities.entity';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany, ManyToOne, JoinColumn } from 'typeorm';

@Entity({ name: 'tbl_health_service_facilities' })
export class HealthServiceFacilityEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    health_service_facility_id!: number;

    @Column({ type: "nvarchar", length: 200, nullable: true })
    health_service_facility_name!: string;
    
    @ManyToOne(() => HealthFacilityEntity)
    @JoinColumn({ name: "health_facility_id" })
    healthFacilityEnity!: HealthFacilityEntity;

    @ManyToOne(() => CategoryHealthFacilityEntity)
    @JoinColumn({ name: "category_health_facility_id" })
    categoryHealthFacilityEnity!: CategoryHealthFacilityEntity;
}