import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, JoinColumn, PrimaryColumn, ManyToOne, ManyToMany } from 'typeorm';
import { Parent } from './Parent';
import Checkup from './Checkup';

@Entity()
export class ParentTable extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    parent_id!: number;

    @ManyToOne(() => Parent, { cascade: true })
    @JoinColumn({ name: "parent_id" })
    parent!: Parent;

    @ManyToOne(() => Checkup, { cascade: true })
    @JoinColumn({ name: "checkup_id" })
    checkup!: Checkup;
};
