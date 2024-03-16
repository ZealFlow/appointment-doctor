import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany } from 'typeorm';

@Entity({ name: 'tbl_permissions' })
export class PermissionEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    permission_id!: number; 

    @Column({ type: "varchar", length: 100 })
    permission_name!: string;

    @Column({ type: "boolean", default: true })
    isActive!: boolean;
}