import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { ProfileEntity } from "./Profiles.entity";
import { HealthFacilityEntity } from "./HealthFacilities.entity";

@Entity({ name: 'tbl_health_facility_profiles' })
export class HealthFacilityProfileEntity extends BaseEntity {
    @PrimaryColumn({type: "int"})
    @ManyToOne(() => HealthFacilityEntity)
    @JoinColumn({ name: "health_facility_id" })
    healthFacilityEntity!: HealthFacilityEntity;

    @PrimaryColumn({type: "int"})
    @ManyToOne(() => ProfileEntity)
    @JoinColumn({ name: "profile_id" })
    profileEntity!: ProfileEntity;
}