import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    Timestamp,
    OneToOne,
    OneToMany,
    JoinColumn
} from 'typeorm';
import { RoleEntity } from './Roles.entity';

@Entity({ name: 'tbl_accounts' })
export class AccountEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    account_id!: number;

    @Column({ type: "varchar", length: 200 })
    username!: string;

    @Column("nvarchar", { length: 50, nullable: true })
    firstname!: string;

    @Column("nvarchar", { length: 50, nullable: true })
    lastname!: string;

    @Column({ type: "varchar", length: 255, unique: true })
    email!: string;

    @Column({ type: "varchar", length: 10, unique: true })
    phone!: string;

    @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
    create_at!: Timestamp;

    @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
    update_at!: Timestamp;

    @Column({ type: "boolean", default: true })
    isActive!: boolean;

    @OneToOne(() => RoleEntity)
    @JoinColumn({ name: "role_id" })
    roleEntity!: RoleEntity;
}