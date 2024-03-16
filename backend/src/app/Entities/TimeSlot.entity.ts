import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { ScheduleEntity } from './Schedules.entity';
import { ScheduleTypeEntity } from './ScheduleTypes.entity';

@Entity({ name: 'tbl_timeslot' })
export class TimeSlotEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    timeslot_id!: number; 

    @ManyToOne(() => ScheduleEntity)
    @JoinColumn({ name: "schedule_id" })
    scheduleEntity!: ScheduleEntity;

    @OneToOne(() => ScheduleTypeEntity)
    @JoinColumn({ name: "schedule_type_id" })
    scheduleTypeEntity!: ScheduleTypeEntity;
}