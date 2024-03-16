import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany } from 'typeorm';

@Entity({ name: 'tbl_specialties' })
export class SpecialistEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    specialist_id!: number;

    @Column({ type: "nvarchar", length: 200, nullable: true })
    specialist_name!: string;
}