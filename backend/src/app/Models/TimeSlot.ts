import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToMany, JoinTable, JoinColumn, ManyToOne } from 'typeorm';
import { Schedule } from './Schedule';

@Entity()
export class TimeSlot extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    time_slot_id!: number; 

    @Column({ type: "time" })
    period!: string;

    @Column({ type: "bit", default: true })
    status!: boolean;

    @ManyToOne(() => Schedule)
    @JoinColumn({ name: "medicine_schedule_id" })
    schedule!: Schedule;
};
