import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany } from 'typeorm';

@Entity({ name: 'tbl_doctors' })
export class DoctorEnity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    doctor_id!: number; 
}