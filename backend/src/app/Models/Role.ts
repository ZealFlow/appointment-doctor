import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { UserProfile } from './UserProfile';
import { EntitiesRole } from './EntitiesRole';

@Entity()
export class Role extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    role_id!: number;

    @Column("varchar", { length: 50 })
    role_name!: string; 

    @OneToMany(() => EntitiesRole, entitiesRole => entitiesRole.role)
    entitiesRole!: EntitiesRole[];
};
