import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { AccountEntity } from './Accounts.entity';

@Entity({ name: 'tbl_credentials' })
export class CredentialEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    credential_id!: number; 

    @Column("varchar", { length: 250 })
    password_hash!: string; 

    @Column("varchar", { length: 250 })
    password_salt!: string;

    @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
    last_updated!: Timestamp;

    @OneToOne(() => AccountEntity)
    @JoinColumn({ name: "account_id" })
    accountEntity!: AccountEntity;
}