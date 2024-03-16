import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { DoctorEntity } from "./Doctors.entity";
import { ProfileEntity } from "./Profiles.entity";

@Entity({ name: 'tbl_doctor_profiles' })
export class DoctorProfileEntity extends BaseEntity {
    @PrimaryColumn({type: "int"})
    @ManyToOne(() => DoctorEntity)
    @JoinColumn({ name: "doctor_id" })
    doctorEntity!: DoctorEntity;

    @PrimaryColumn({type: "int"})
    @ManyToOne(() => ProfileEntity)
    @JoinColumn({ name: "profile_id" })
    profileEntity!: ProfileEntity;
}