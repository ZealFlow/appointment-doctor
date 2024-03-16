import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany } from 'typeorm';

@Entity({ name: 'tbl_health_facilities' })
export class HealthFacilityEnity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    health_facility_id!: number; 
}