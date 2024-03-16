import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany } from 'typeorm';

@Entity({ name: 'tbl_appointments' })
export class AppointmentEnity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    appointment_id!: number; 
}