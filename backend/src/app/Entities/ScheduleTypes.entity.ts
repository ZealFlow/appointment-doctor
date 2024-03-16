import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany } from 'typeorm';

@Entity({ name: 'tbl_schedule_types' })
export class ScheduleTypeEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    schedule_type_id!: number; 

    @Column({ type: "nvarchar", length: 200 })
    schedule_type_name!: string;
}