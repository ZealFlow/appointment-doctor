import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany } from 'typeorm';

export enum GenderCustomer {
    male = 1,
    female = 2,
    other = 3
};

@Entity()
export class Customer extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    customer_id!: number; 

    @Column("nvarchar", { length: 50, nullable: true })
    firstname!: string;

    @Column("nvarchar", { length: 50, nullable: true })
    lastname!: string;

    @Column("nvarchar", { length: 100, nullable: true })
    email!: string;

    @Column({ type: "date" })
    dob!: Date;

    @Column({ type: "enum", enum: GenderCustomer })
    gender!: GenderCustomer;

    @Column("varchar", { length: 150 })
    phone!: string;

    @Column("varchar", { length: 150 })
    province!: string;

    @Column("varchar", { length: 150 })
    city!: string;

    @Column("varchar", { length: 150 })
    address!: string;

    @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
    create_at!: Timestamp;
};
