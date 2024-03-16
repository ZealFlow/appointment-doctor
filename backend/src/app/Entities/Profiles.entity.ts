import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { DoctorEntity } from './Doctors.entity';

enum VerificationStatus {
    PENDING = 'pending',
    COMPLETED = 'completed',
    FAILED = 'failed'
}

@Entity({ name: 'tbl_profiles' })
export class ProfileEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    profile_id!: number;
    
    @Column({ type: "varchar", length: 100, nullable: true })
    doctor_license_number!: string;

    @Column({ type: "enum", enum: VerificationStatus, default: VerificationStatus.PENDING })
    verificationStatus!: VerificationStatus;
}