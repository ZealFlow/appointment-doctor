import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany } from 'typeorm';

@Entity({ name: 'tbl_examination_service' })
export class ExaminationServiceEnity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    examination_service_id!: number; 
}