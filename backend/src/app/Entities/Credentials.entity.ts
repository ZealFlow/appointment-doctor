import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany } from 'typeorm';

@Entity({ name: 'tbl_credentials' })
export class CredentialEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    credential_id!: number; 
}