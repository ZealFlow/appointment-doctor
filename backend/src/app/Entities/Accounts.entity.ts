import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany } from 'typeorm';

@Entity({ name: 'tbl_accounts' })
export class AccountEnity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    account_id!: number; 
}