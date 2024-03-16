import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany } from 'typeorm';

@Entity({ name: 'tbl_permissions' })
export class PermissionEnity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    permission_id!: number; 
}