import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany } from 'typeorm';

@Entity({ name: 'tbl_roles' })
export class RoleEnity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    role_id!: number; 
}