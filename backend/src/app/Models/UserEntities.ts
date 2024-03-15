import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { UserProfile } from "./UserProfile";
import { UserCredential } from "./UserCredential";

@Entity()
export class UserEntities extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    entity_id!: number;

    @Column({ type: "json", nullable: true })
    enity_user!: JSON;

    @Column({ type: "timestamp", default: () => 'NOW()' })
    create_at!: Timestamp;

    @Column({ type: "timestamp", default: () => 'NOW()' })
    update_at!: Timestamp;

    @Column({ type: "bit", default: true })
    is_active!: boolean;

    @OneToOne(() => UserCredential, userCredential => userCredential.userEntities, { cascade: true })
    userCredential!: UserCredential;

    @OneToOne(() => UserProfile, userProfile => userProfile.userEntities)
    @JoinColumn() 
    userProfile!: UserProfile;
};
 