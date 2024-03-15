import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, JoinColumn, PrimaryColumn, ManyToOne, ManyToMany } from 'typeorm';
import { UserEntities } from './UserEntities';

@Entity()
export class Parent extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    parent_id!: number;

    @OneToOne(() => UserEntities, { cascade: true })
    @JoinColumn({ name: "entities_id" })
    userEntities!: UserEntities;
};
