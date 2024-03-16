import { MigrationInterface, QueryRunner } from "typeorm";

export class DbHealthhub1710618534391 implements MigrationInterface {
    name = 'DbHealthhub1710618534391'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` DROP FOREIGN KEY \`FK_ad77873650daf57d8d27f4b82a4\``);
        await queryRunner.query(`ALTER TABLE \`tbl_health_facilities\` DROP FOREIGN KEY \`FK_6c88581e6d9e151736725473dd0\``);
        await queryRunner.query(`DROP INDEX \`REL_ad77873650daf57d8d27f4b82a\` ON \`tbl_doctors\``);
        await queryRunner.query(`DROP INDEX \`REL_6c88581e6d9e151736725473dd\` ON \`tbl_health_facilities\``);
        await queryRunner.query(`CREATE TABLE \`tbl_health_facility_profiles\` (\`healthFacilityEntity\` int NOT NULL, \`profileEntity\` int NOT NULL, \`health_facility_id\` int NULL, \`profile_id\` int NULL, PRIMARY KEY (\`healthFacilityEntity\`, \`profileEntity\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_doctor_profiles\` (\`doctorEntity\` int NOT NULL, \`profileEntity\` int NOT NULL, \`doctor_id\` int NULL, \`profile_id\` int NULL, PRIMARY KEY (\`doctorEntity\`, \`profileEntity\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` DROP COLUMN \`profile_id\``);
        await queryRunner.query(`ALTER TABLE \`tbl_health_facilities\` DROP COLUMN \`profile_id\``);
        await queryRunner.query(`ALTER TABLE \`tbl_roles\` ADD \`role_name\` varchar(50) NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`tbl_roles\` ADD \`isActive\` tinyint NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`tbl_accounts\` ADD \`username\` varchar(200) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_accounts\` ADD \`email\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_accounts\` ADD UNIQUE INDEX \`IDX_5d1c89a2b4de4b30f6b1018455\` (\`email\`)`);
        await queryRunner.query(`ALTER TABLE \`tbl_accounts\` ADD \`phone\` varchar(10) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_accounts\` ADD UNIQUE INDEX \`IDX_bd01bb27799371779d689b3649\` (\`phone\`)`);
        await queryRunner.query(`ALTER TABLE \`tbl_accounts\` ADD \`create_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`tbl_accounts\` ADD \`update_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`tbl_accounts\` ADD \`isActive\` tinyint NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` ADD \`specialization\` varchar(100) NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` ADD \`description\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` ADD \`qualification\` varchar(100) NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` ADD \`experience\` varchar(100) NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` ADD \`location\` varchar(100) NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` ADD \`isAvailable\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`tbl_schedules\` ADD \`datework\` date NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_schedules\` ADD \`starttime\` time NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_schedules\` ADD \`endtime\` time NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_schedules\` ADD \`cost\` bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_schedule_types\` ADD \`schedule_type_name\` varchar(200) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_specialties\` ADD \`license_diagnosis\` varchar(200) NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_profiles\` ADD \`doctor_license_number\` varchar(100) NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_profiles\` ADD \`verificationStatus\` enum ('pending', 'completed', 'failed') NOT NULL DEFAULT 'pending'`);
        await queryRunner.query(`ALTER TABLE \`tbl_reviews\` ADD \`rating\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_reviews\` ADD \`comment\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_reviews\` ADD \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`tbl_permissions\` ADD \`permission_name\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_permissions\` ADD \`isActive\` tinyint NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`tbl_payments\` ADD \`amount\` decimal(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_payments\` ADD \`payment_method\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_payments\` ADD \`payment_date\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`tbl_payments\` ADD \`isPaid\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`tbl_medical_records\` ADD \`license_diagnosis\` varchar(100) NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_medical_records\` ADD \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`tbl_medical_records\` ADD \`updatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`tbl_categories\` ADD \`category_name\` varchar(200) NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_health_service_facilities\` ADD \`health_service_facility_name\` varchar(200) NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_credentials\` ADD \`password_hash\` varchar(250) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_credentials\` ADD \`password_salt\` varchar(250) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_credentials\` ADD \`last_updated\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`tbl_health_facility_profiles\` ADD CONSTRAINT \`FK_605ca4241cc29f444993fd5e77f\` FOREIGN KEY (\`health_facility_id\`) REFERENCES \`tbl_health_facilities\`(\`health_facility_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_health_facility_profiles\` ADD CONSTRAINT \`FK_76f54d07ddaa309be73497b41d4\` FOREIGN KEY (\`profile_id\`) REFERENCES \`tbl_profiles\`(\`profile_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_doctor_profiles\` ADD CONSTRAINT \`FK_11f045be46f0f284c5902ddefb5\` FOREIGN KEY (\`doctor_id\`) REFERENCES \`tbl_doctors\`(\`doctor_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_doctor_profiles\` ADD CONSTRAINT \`FK_96b1c3eea25776430a05eac8cb6\` FOREIGN KEY (\`profile_id\`) REFERENCES \`tbl_profiles\`(\`profile_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tbl_doctor_profiles\` DROP FOREIGN KEY \`FK_96b1c3eea25776430a05eac8cb6\``);
        await queryRunner.query(`ALTER TABLE \`tbl_doctor_profiles\` DROP FOREIGN KEY \`FK_11f045be46f0f284c5902ddefb5\``);
        await queryRunner.query(`ALTER TABLE \`tbl_health_facility_profiles\` DROP FOREIGN KEY \`FK_76f54d07ddaa309be73497b41d4\``);
        await queryRunner.query(`ALTER TABLE \`tbl_health_facility_profiles\` DROP FOREIGN KEY \`FK_605ca4241cc29f444993fd5e77f\``);
        await queryRunner.query(`ALTER TABLE \`tbl_credentials\` DROP COLUMN \`last_updated\``);
        await queryRunner.query(`ALTER TABLE \`tbl_credentials\` DROP COLUMN \`password_salt\``);
        await queryRunner.query(`ALTER TABLE \`tbl_credentials\` DROP COLUMN \`password_hash\``);
        await queryRunner.query(`ALTER TABLE \`tbl_health_service_facilities\` DROP COLUMN \`health_service_facility_name\``);
        await queryRunner.query(`ALTER TABLE \`tbl_categories\` DROP COLUMN \`category_name\``);
        await queryRunner.query(`ALTER TABLE \`tbl_medical_records\` DROP COLUMN \`updatedAt\``);
        await queryRunner.query(`ALTER TABLE \`tbl_medical_records\` DROP COLUMN \`createdAt\``);
        await queryRunner.query(`ALTER TABLE \`tbl_medical_records\` DROP COLUMN \`license_diagnosis\``);
        await queryRunner.query(`ALTER TABLE \`tbl_payments\` DROP COLUMN \`isPaid\``);
        await queryRunner.query(`ALTER TABLE \`tbl_payments\` DROP COLUMN \`payment_date\``);
        await queryRunner.query(`ALTER TABLE \`tbl_payments\` DROP COLUMN \`payment_method\``);
        await queryRunner.query(`ALTER TABLE \`tbl_payments\` DROP COLUMN \`amount\``);
        await queryRunner.query(`ALTER TABLE \`tbl_permissions\` DROP COLUMN \`isActive\``);
        await queryRunner.query(`ALTER TABLE \`tbl_permissions\` DROP COLUMN \`permission_name\``);
        await queryRunner.query(`ALTER TABLE \`tbl_reviews\` DROP COLUMN \`createdAt\``);
        await queryRunner.query(`ALTER TABLE \`tbl_reviews\` DROP COLUMN \`comment\``);
        await queryRunner.query(`ALTER TABLE \`tbl_reviews\` DROP COLUMN \`rating\``);
        await queryRunner.query(`ALTER TABLE \`tbl_profiles\` DROP COLUMN \`verificationStatus\``);
        await queryRunner.query(`ALTER TABLE \`tbl_profiles\` DROP COLUMN \`doctor_license_number\``);
        await queryRunner.query(`ALTER TABLE \`tbl_specialties\` DROP COLUMN \`license_diagnosis\``);
        await queryRunner.query(`ALTER TABLE \`tbl_schedule_types\` DROP COLUMN \`schedule_type_name\``);
        await queryRunner.query(`ALTER TABLE \`tbl_schedules\` DROP COLUMN \`cost\``);
        await queryRunner.query(`ALTER TABLE \`tbl_schedules\` DROP COLUMN \`endtime\``);
        await queryRunner.query(`ALTER TABLE \`tbl_schedules\` DROP COLUMN \`starttime\``);
        await queryRunner.query(`ALTER TABLE \`tbl_schedules\` DROP COLUMN \`datework\``);
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` DROP COLUMN \`isAvailable\``);
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` DROP COLUMN \`location\``);
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` DROP COLUMN \`experience\``);
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` DROP COLUMN \`qualification\``);
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` DROP COLUMN \`specialization\``);
        await queryRunner.query(`ALTER TABLE \`tbl_accounts\` DROP COLUMN \`isActive\``);
        await queryRunner.query(`ALTER TABLE \`tbl_accounts\` DROP COLUMN \`update_at\``);
        await queryRunner.query(`ALTER TABLE \`tbl_accounts\` DROP COLUMN \`create_at\``);
        await queryRunner.query(`ALTER TABLE \`tbl_accounts\` DROP INDEX \`IDX_bd01bb27799371779d689b3649\``);
        await queryRunner.query(`ALTER TABLE \`tbl_accounts\` DROP COLUMN \`phone\``);
        await queryRunner.query(`ALTER TABLE \`tbl_accounts\` DROP INDEX \`IDX_5d1c89a2b4de4b30f6b1018455\``);
        await queryRunner.query(`ALTER TABLE \`tbl_accounts\` DROP COLUMN \`email\``);
        await queryRunner.query(`ALTER TABLE \`tbl_accounts\` DROP COLUMN \`username\``);
        await queryRunner.query(`ALTER TABLE \`tbl_roles\` DROP COLUMN \`isActive\``);
        await queryRunner.query(`ALTER TABLE \`tbl_roles\` DROP COLUMN \`role_name\``);
        await queryRunner.query(`ALTER TABLE \`tbl_health_facilities\` ADD \`profile_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` ADD \`profile_id\` int NULL`);
        await queryRunner.query(`DROP TABLE \`tbl_doctor_profiles\``);
        await queryRunner.query(`DROP TABLE \`tbl_health_facility_profiles\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_6c88581e6d9e151736725473dd\` ON \`tbl_health_facilities\` (\`profile_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_ad77873650daf57d8d27f4b82a\` ON \`tbl_doctors\` (\`profile_id\`)`);
        await queryRunner.query(`ALTER TABLE \`tbl_health_facilities\` ADD CONSTRAINT \`FK_6c88581e6d9e151736725473dd0\` FOREIGN KEY (\`profile_id\`) REFERENCES \`tbl_profiles\`(\`profile_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` ADD CONSTRAINT \`FK_ad77873650daf57d8d27f4b82a4\` FOREIGN KEY (\`profile_id\`) REFERENCES \`tbl_profiles\`(\`profile_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
