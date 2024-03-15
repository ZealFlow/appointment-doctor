import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToMany, JoinTable, JoinColumn, ManyToOne } from 'typeorm';
import { TimeSlot } from './TimeSlot';
import { Customer } from './Customer';

export enum StatusAppointment {
    paided = 1,
    unpaid = 2,
    cancel = 3
};

@Entity()
export class Appointment extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    appointment_id!: number;

    @Column({ type: "datetime",  default: () => 'NOW()' })
    appointment_date!: string; 

    @Column({ type: "nvarchar" })
    appointment_description!: string;

    @Column({type: "enum", enum: StatusAppointment})
    status!: StatusAppointment;

    @ManyToOne(() => TimeSlot)
    @JoinColumn({ name: "time_slot_id" })
    timeSlot!: TimeSlot;

    @ManyToOne(() => Customer)
    @JoinColumn({ name: "customer_id" })
    customer!: Customer;
};
