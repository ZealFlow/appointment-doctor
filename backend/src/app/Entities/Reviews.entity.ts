import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { DoctorEntity } from './Doctors.entity';
import { CustomerEntity } from './Customers.entity';

@Entity({ name: 'tbl_reviews' })
export class ReviewEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    review_id!: number; 

    @Column({ type: "int" })
    rating!: number;

    @Column({ type: "text", nullable: true })
    comment!: string;

    @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
    createdAt!: Date;

    @OneToOne(() => DoctorEntity)
    @JoinColumn({ name: "doctor_id" })
    doctorEntity!: DoctorEntity;

    @OneToOne(() => CustomerEntity)
    @JoinColumn({ name: "customer_id" })
    customerEntity!: CustomerEntity;
}