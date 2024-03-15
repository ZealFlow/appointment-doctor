import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, JoinColumn, PrimaryColumn, ManyToOne, ManyToMany } from 'typeorm';

@Entity()
export default class Checkup extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    checkup_id!: number;

    @Column({ type: "json", nullable: true })
    checkup_detail!: JSON;

    @Column("nvarchar", { length: 150 })
    checkup_name!: string;
};
