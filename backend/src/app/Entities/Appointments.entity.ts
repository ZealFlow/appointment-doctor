import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { TimeSlotEntity } from './TimeSlot.entity';
import { CustomerEntity } from './Customers.entity';

@Entity({ name: 'tbl_appointments' })
export class AppointmentEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    appointment_id!: number; 

    @ManyToOne(() => TimeSlotEntity)
    @JoinColumn({ name: "timeslot_id" })
    timeSlotEntity!: TimeSlotEntity;

    @ManyToOne(() => CustomerEntity)
    @JoinColumn({ name: "customer_id" })
    customerEntity!: CustomerEntity;
}