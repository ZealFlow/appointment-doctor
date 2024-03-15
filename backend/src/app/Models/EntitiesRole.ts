import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, JoinColumn, PrimaryColumn, ManyToOne, ManyToMany } from 'typeorm';
import { Role } from './Role';
import { UserProfile } from './UserProfile';

@Entity()
export class EntitiesRole extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    entities_id!: number;

    @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
    create_at!: Timestamp;

    @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
    update_at!: Timestamp;

    @Column({ type: "bit", default: true })
    is_active!: boolean;

    @ManyToOne(() => UserProfile)
    @JoinColumn({ name: "user_id" })
    userProfile!: UserProfile;

    @ManyToOne(() => Role)
    @JoinColumn({ name: "role_id" })
    role!: Role;
};
