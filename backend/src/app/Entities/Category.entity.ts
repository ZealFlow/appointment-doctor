import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany } from 'typeorm';

@Entity({ name: 'tbl_categorys' })
export class CategoryEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    category_id!: number; 
}