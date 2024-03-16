import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { CustomerEntity } from './Customers.entity';
import { DoctorEntity } from './Doctors.entity';

@Entity({ name: 'tbl_medical_records' })
export class MedicalRecordEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    medical_record_id!: number;

    @Column({ type: "varchar", length: 100, nullable: true })
    license_diagnosis!: string;

    @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
    createdAt!: Date;

    @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt!: Date;

    @ManyToOne(() => CustomerEntity)
    @JoinColumn({ name: "customer_id" })
    customerEnity!: CustomerEntity;

    @ManyToOne(() => DoctorEntity)
    @JoinColumn({ name: "doctor_id" })
    doctorEnity!: DoctorEntity;
}