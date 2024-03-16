import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { CategoryEntity } from './Category.entity';
import { DoctorEntity } from './Doctors.entity';

@Entity({ name: 'tbl_category_doctor' })
export class CategoryDoctorEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    category_health_facility_id!: number; 

    @ManyToOne(() => CategoryEntity)
    @JoinColumn({ name: "category_id" })
    categoryEntity!: CategoryEntity;

    @ManyToOne(() => DoctorEntity)
    @JoinColumn({ name: "doctor_id" })
    doctorEntity!: DoctorEntity;
}