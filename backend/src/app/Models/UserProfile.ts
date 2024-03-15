import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany } from 'typeorm';
import { UserEntities } from './UserEntities';
import { EntitiesRole } from './EntitiesRole';

export enum GenderUser {
    male = 1,
    female = 2,
    other = 3
};

@Entity()
export class UserProfile extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    user_id!: number; 

    @Column("nvarchar", { length: 50, nullable: true })
    firstname!: string;

    @Column("nvarchar", { length: 50, nullable: true })
    lastname!: string;

    @Column("nvarchar", { length: 100, nullable: true })
    email!: string;

    @Column("varchar", { length: 50, nullable: true })
    username!: string;

    @Column({ type: "date" })
    dateofbirth!: Date;

    @Column({ type: "enum", enum: GenderUser })
    gender!: GenderUser;

    @Column("varchar", { length: 150 })
    phone!: string;

    @Column("varchar", { length: 150 })
    indentifyCode!: string;

    @Column("varchar", { length: 150 })
    country!: string;

    @Column("varchar", { length: 150 })
    ethnic!: string;

    @Column("varchar", { length: 150 })
    province!: string;

    @Column("varchar", { length: 150 })
    district!: string;

    @Column("varchar", { length: 150 })
    commune!: string;

    @Column("varchar", { length: 150 })
    residence_address!: string;

    @Column("varchar", { length: 150 })
    permanent_Address!: string

    @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
    create_at!: Timestamp;

    @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
    update_at!: Timestamp;

    @Column({ type: "bit", default: true })
    is_active!: boolean;

    @OneToOne(() => UserEntities, userEntities => userEntities.userProfile, { cascade: true })
    userEntities!: UserEntities;

    @OneToMany(() => EntitiesRole, entitiesRole => entitiesRole.userProfile, { cascade: true })
    entitiesRole!: EntitiesRole[];
};
