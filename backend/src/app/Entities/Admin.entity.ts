import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { AccountEntity } from './Accounts.entity';

@Entity({ name: 'admin' })
export class AdminEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    admin_id!: number; 

    @OneToOne(() => AccountEntity)
    @JoinColumn({ name: "account_id" })
    accountEntity!: AccountEntity;
}