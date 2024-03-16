import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany } from 'typeorm';

@Entity({ name: 'tbl_schedules' })
export class ScheduleEnity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    schedule_id!: number; 
}