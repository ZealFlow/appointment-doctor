import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany } from 'typeorm';

@Entity({ name: 'tbl_appointment_types' })
export class AppointmentTypeEnity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    appointment_type_id!: number; 
}