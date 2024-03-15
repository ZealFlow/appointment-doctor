import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, JoinColumn, Index } from 'typeorm';
import { UserEntities } from './UserEntities';

@Entity()
export class UserCredential extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    password_id!: number;

    @Column("varchar", { length: 250 })
    password_hash!: string; 

    @Column("varchar", { length: 250 })
    password_salt!: string;

    @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
    last_updated!: Timestamp;

    @OneToOne(() => UserEntities, userEntities => userEntities.userCredential)
    @JoinColumn()
    @Index({ unique: true })
    userEntities!: UserEntities;
};
