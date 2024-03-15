import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToMany, JoinTable, JoinColumn, ManyToOne } from 'typeorm';
import { UserEntities } from './UserEntities';

@Entity()
export class Schedule extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    medicine_schedule_id!: number;

    @Column("date")
    datework!: Date; 

    @Column({ type: "time" })
    starttime!: string;

    @Column({ type: "time" })
    endtime!: string;

    @Column({ type: "bigint" })
    cost!: number;

    @ManyToOne(() => UserEntities)
    @JoinColumn({ name: "doctor_id" })
    doctor!: UserEntities;
};
