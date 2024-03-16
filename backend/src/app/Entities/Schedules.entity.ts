import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { DoctorEntity } from './Doctors.entity';

@Entity({ name: 'tbl_schedules' })
export class ScheduleEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    schedule_id!: number;

    @Column("date")
    datework!: Date;

    @Column({ type: "time" })
    starttime!: string;

    @Column({ type: "time" })
    endtime!: string;

    @Column({ type: "bigint" })
    cost!: number;

    @ManyToOne(() => DoctorEntity)
    @JoinColumn({ name: "doctor_id" })
    doctorEntity!: DoctorEntity;
}