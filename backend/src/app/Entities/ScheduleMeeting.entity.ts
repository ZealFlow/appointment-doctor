import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany } from 'typeorm';

@Entity({ name: 'tbl_schedule_meeting' })
export class ScheduleMeetingEnity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    schedule_meeting_id!: number; 
}