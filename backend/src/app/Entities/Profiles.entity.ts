import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany } from 'typeorm';

@Entity({ name: 'tbl_profiles' })
export class ProfileEnity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    profile_id!: number; 
}