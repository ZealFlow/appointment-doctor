import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { AccountEntity } from './Accounts.entity';
import { TimeSlotEntity } from './TimeSlot.entity';

@Entity({ name: 'tbl_doctors' })
export class DoctorEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    doctor_id!: number; 

    @Column({ type: "varchar", length: 255, nullable: true })
    description!: string;

    @Column({ type: "varchar", length: 100, nullable: true })
    qualification!: string;

    @Column({ type: "varchar", length: 100, nullable: true })
    experience!: string;

    @Column({ type: "varchar", length: 100, nullable: true })
    location!: string;

    @Column({ type: "boolean", default: false })
    isAvailable?: boolean;

    @OneToOne(() => AccountEntity)
    @JoinColumn({ name: "account_id" })
    accountEntity!: AccountEntity;

    @OneToOne(() => TimeSlotEntity)
    @JoinColumn({ name: "time_slot_id" })
    timeSlotEntity!: TimeSlotEntity;
}