import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany } from 'typeorm';

@Entity({ name: 'tbl_categories' })
export class CategoryEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    category_id!: number; 

    @Column({ type: "nvarchar", length: 200, nullable: true })
    category_name!: string;
}