import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { AppointmentEntity } from './Appointments.entity';
import { CustomerEntity } from './Customers.entity';

@Entity({ name: 'tbl_payments' })
export class PaymentEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    payment_id!: number; 

    @Column({ type: "decimal", precision: 10, scale: 2 })
    amount!: number;
    @Column({ type: "varchar", length: 255 })
    payment_method!: string;

    @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
    payment_date!: Date;

    @Column({ type: "boolean", default: false })
    isPaid!: boolean;

    @OneToOne(() => AppointmentEntity)
    @JoinColumn({ name: "appointment_id" })
    appointmentEnity!: AppointmentEntity;
}