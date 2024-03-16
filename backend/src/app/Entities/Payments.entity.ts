import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany } from 'typeorm';

@Entity({ name: 'tbl_payments' })
export class PaymentEnity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    payment_id!: number; 
}