import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { AccountEntity } from './Accounts.entity';
import { ProfileEntity } from './Profiles.entity';

@Entity({ name: 'tbl_health_facilities' })
export class HealthFacilityEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    health_facility_id!: number; 

    @OneToOne(() => AccountEntity)
    @JoinColumn({ name: "account_id" })
    accountEntity!: AccountEntity;
}