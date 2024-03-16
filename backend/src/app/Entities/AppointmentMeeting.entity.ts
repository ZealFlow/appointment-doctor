import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { AppointmentEntity } from './Appointments.entity';

@Entity({ name: 'tbl_appointment_meeting' })
export class AppointmentMeetingEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    appointment_meeting_id!: number; 

    @OneToOne(() => AppointmentEntity)
    @JoinColumn({ name: "appointment_id" })
    appointmentEntity!: AppointmentEntity;
}