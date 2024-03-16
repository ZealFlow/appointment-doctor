import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany } from 'typeorm';

@Entity({ name: 'tbl_timeslot' })
export class TimeSlotEnity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    timeslot_id!: number; 
}