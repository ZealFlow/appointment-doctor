import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany } from 'typeorm';

@Entity({ name: 'tbl_customers' })
export class CustomerEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    customer_id!: number; 
}