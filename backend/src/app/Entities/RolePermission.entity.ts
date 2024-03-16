import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { RoleEntity } from './Roles.entity';
import { PermissionEntity } from './Permissions.entity';

@Entity({ name: 'tbl_role_permission' })
export class RolePermissionEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    role_permission_id!: number;

    @ManyToOne(() => RoleEntity)
    @JoinColumn({ name: "role_id" })
    roleEntity!: RoleEntity;

    @ManyToOne(() => PermissionEntity)
    @JoinColumn({ name: "permission_id" })
    permissionEnity!: PermissionEntity;
}