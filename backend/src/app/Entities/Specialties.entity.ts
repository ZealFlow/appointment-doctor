import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany } from 'typeorm';

@Entity({ name: 'tbl_specialties' })
export class SpecialistEnity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    specialist_id!: number; 
}