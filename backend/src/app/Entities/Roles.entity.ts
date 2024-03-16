import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany } from 'typeorm';

@Entity({ name: 'tbl_roles' })
export class RoleEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    role_id!: number; 

    @Column({ type: "varchar", length: 50, default: true })
    role_name!: string;

    @Column({ type: "boolean", default: true })
    isActive!: boolean;
}