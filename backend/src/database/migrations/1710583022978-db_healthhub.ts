import { MigrationInterface, QueryRunner } from "typeorm";

export class DbHealthhub1710583022978 implements MigrationInterface {
    name = 'DbHealthhub1710583022978'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_c857dea1ed946598c27ec65ea1\` ON \`tbl_accounts\``);
        await queryRunner.query(`CREATE TABLE \`tbl_schedule_types\` (\`schedule_type_id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`schedule_type_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_role_permission\` (\`role_permission_id\` int NOT NULL AUTO_INCREMENT, \`role_id\` int NULL, \`permission_id\` int NULL, PRIMARY KEY (\`role_permission_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_health_service_facilities\` (\`health_service_facility_id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`health_service_facility_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_appointment_meeting\` (\`appointment_meeting_id\` int NOT NULL AUTO_INCREMENT, \`appointment_id\` int NULL, UNIQUE INDEX \`REL_5ed0145003b7e5b61ee7e4a809\` (\`appointment_id\`), PRIMARY KEY (\`appointment_meeting_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`admin\` (\`admin_id\` int NOT NULL AUTO_INCREMENT, \`account_id\` int NULL, UNIQUE INDEX \`REL_549a26f8a691cec95c57a036b4\` (\`account_id\`), PRIMARY KEY (\`admin_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` ADD \`account_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` ADD UNIQUE INDEX \`IDX_31e17263b181c25335d63d1b9f\` (\`account_id\`)`);
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` ADD \`profile_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` ADD UNIQUE INDEX \`IDX_ad77873650daf57d8d27f4b82a\` (\`profile_id\`)`);
        await queryRunner.query(`ALTER TABLE \`tbl_schedules\` ADD \`doctor_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_timeslot\` ADD \`schedule_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_timeslot\` ADD \`schedule_type_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_timeslot\` ADD UNIQUE INDEX \`IDX_9a0f91f3bbec961c694b368795\` (\`schedule_type_id\`)`);
        await queryRunner.query(`ALTER TABLE \`tbl_appointments\` ADD \`timeslot_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_appointments\` ADD \`customer_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_payments\` ADD \`appointment_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_payments\` ADD UNIQUE INDEX \`IDX_f5ac126602d4e072f4d5097cb4\` (\`appointment_id\`)`);
        await queryRunner.query(`ALTER TABLE \`tbl_credentials\` ADD \`account_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_credentials\` ADD UNIQUE INDEX \`IDX_b81f2d17ddefde2982e915aed5\` (\`account_id\`)`);
        await queryRunner.query(`ALTER TABLE \`tbl_health_facilities\` ADD \`account_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_health_facilities\` ADD UNIQUE INDEX \`IDX_b5bc602ae9438bc4a3f7163716\` (\`account_id\`)`);
        await queryRunner.query(`ALTER TABLE \`tbl_health_facilities\` ADD \`profile_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_health_facilities\` ADD UNIQUE INDEX \`IDX_6c88581e6d9e151736725473dd\` (\`profile_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_31e17263b181c25335d63d1b9f\` ON \`tbl_doctors\` (\`account_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_ad77873650daf57d8d27f4b82a\` ON \`tbl_doctors\` (\`profile_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_9a0f91f3bbec961c694b368795\` ON \`tbl_timeslot\` (\`schedule_type_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_f5ac126602d4e072f4d5097cb4\` ON \`tbl_payments\` (\`appointment_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_b81f2d17ddefde2982e915aed5\` ON \`tbl_credentials\` (\`account_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_b5bc602ae9438bc4a3f7163716\` ON \`tbl_health_facilities\` (\`account_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_6c88581e6d9e151736725473dd\` ON \`tbl_health_facilities\` (\`profile_id\`)`);
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` ADD CONSTRAINT \`FK_31e17263b181c25335d63d1b9fb\` FOREIGN KEY (\`account_id\`) REFERENCES \`tbl_accounts\`(\`account_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` ADD CONSTRAINT \`FK_ad77873650daf57d8d27f4b82a4\` FOREIGN KEY (\`profile_id\`) REFERENCES \`tbl_profiles\`(\`profile_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_schedules\` ADD CONSTRAINT \`FK_9aaeb0228924f659b8b57e0da02\` FOREIGN KEY (\`doctor_id\`) REFERENCES \`tbl_doctors\`(\`doctor_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_timeslot\` ADD CONSTRAINT \`FK_71ed4bf51786a9a940ea82e8270\` FOREIGN KEY (\`schedule_id\`) REFERENCES \`tbl_schedules\`(\`schedule_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_timeslot\` ADD CONSTRAINT \`FK_9a0f91f3bbec961c694b368795f\` FOREIGN KEY (\`schedule_type_id\`) REFERENCES \`tbl_schedule_types\`(\`schedule_type_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_role_permission\` ADD CONSTRAINT \`FK_62b7c849d4bd48853d89527d833\` FOREIGN KEY (\`role_id\`) REFERENCES \`tbl_roles\`(\`role_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_role_permission\` ADD CONSTRAINT \`FK_a8a566876119550f0027f2fde9d\` FOREIGN KEY (\`permission_id\`) REFERENCES \`tbl_permissions\`(\`permission_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_appointments\` ADD CONSTRAINT \`FK_cca91bfdbf868dc7547dcf57685\` FOREIGN KEY (\`timeslot_id\`) REFERENCES \`tbl_timeslot\`(\`timeslot_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_appointments\` ADD CONSTRAINT \`FK_dd9d0a834848c5d1a30191a4273\` FOREIGN KEY (\`customer_id\`) REFERENCES \`tbl_customers\`(\`customer_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_payments\` ADD CONSTRAINT \`FK_f5ac126602d4e072f4d5097cb42\` FOREIGN KEY (\`appointment_id\`) REFERENCES \`tbl_appointments\`(\`appointment_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_credentials\` ADD CONSTRAINT \`FK_b81f2d17ddefde2982e915aed56\` FOREIGN KEY (\`account_id\`) REFERENCES \`tbl_accounts\`(\`account_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_health_facilities\` ADD CONSTRAINT \`FK_b5bc602ae9438bc4a3f7163716d\` FOREIGN KEY (\`account_id\`) REFERENCES \`tbl_accounts\`(\`account_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_health_facilities\` ADD CONSTRAINT \`FK_6c88581e6d9e151736725473dd0\` FOREIGN KEY (\`profile_id\`) REFERENCES \`tbl_profiles\`(\`profile_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_health_service_facilities\` ADD CONSTRAINT \`FK_7226062aba803dfb9dda15eb342\` FOREIGN KEY (\`health_service_facility_id\`) REFERENCES \`tbl_health_facilities\`(\`health_facility_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_appointment_meeting\` ADD CONSTRAINT \`FK_5ed0145003b7e5b61ee7e4a8099\` FOREIGN KEY (\`appointment_id\`) REFERENCES \`tbl_appointments\`(\`appointment_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`admin\` ADD CONSTRAINT \`FK_549a26f8a691cec95c57a036b48\` FOREIGN KEY (\`account_id\`) REFERENCES \`tbl_accounts\`(\`account_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`admin\` DROP FOREIGN KEY \`FK_549a26f8a691cec95c57a036b48\``);
        await queryRunner.query(`ALTER TABLE \`tbl_appointment_meeting\` DROP FOREIGN KEY \`FK_5ed0145003b7e5b61ee7e4a8099\``);
        await queryRunner.query(`ALTER TABLE \`tbl_health_service_facilities\` DROP FOREIGN KEY \`FK_7226062aba803dfb9dda15eb342\``);
        await queryRunner.query(`ALTER TABLE \`tbl_health_facilities\` DROP FOREIGN KEY \`FK_6c88581e6d9e151736725473dd0\``);
        await queryRunner.query(`ALTER TABLE \`tbl_health_facilities\` DROP FOREIGN KEY \`FK_b5bc602ae9438bc4a3f7163716d\``);
        await queryRunner.query(`ALTER TABLE \`tbl_credentials\` DROP FOREIGN KEY \`FK_b81f2d17ddefde2982e915aed56\``);
        await queryRunner.query(`ALTER TABLE \`tbl_payments\` DROP FOREIGN KEY \`FK_f5ac126602d4e072f4d5097cb42\``);
        await queryRunner.query(`ALTER TABLE \`tbl_appointments\` DROP FOREIGN KEY \`FK_dd9d0a834848c5d1a30191a4273\``);
        await queryRunner.query(`ALTER TABLE \`tbl_appointments\` DROP FOREIGN KEY \`FK_cca91bfdbf868dc7547dcf57685\``);
        await queryRunner.query(`ALTER TABLE \`tbl_role_permission\` DROP FOREIGN KEY \`FK_a8a566876119550f0027f2fde9d\``);
        await queryRunner.query(`ALTER TABLE \`tbl_role_permission\` DROP FOREIGN KEY \`FK_62b7c849d4bd48853d89527d833\``);
        await queryRunner.query(`ALTER TABLE \`tbl_timeslot\` DROP FOREIGN KEY \`FK_9a0f91f3bbec961c694b368795f\``);
        await queryRunner.query(`ALTER TABLE \`tbl_timeslot\` DROP FOREIGN KEY \`FK_71ed4bf51786a9a940ea82e8270\``);
        await queryRunner.query(`ALTER TABLE \`tbl_schedules\` DROP FOREIGN KEY \`FK_9aaeb0228924f659b8b57e0da02\``);
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` DROP FOREIGN KEY \`FK_ad77873650daf57d8d27f4b82a4\``);
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` DROP FOREIGN KEY \`FK_31e17263b181c25335d63d1b9fb\``);
        await queryRunner.query(`DROP INDEX \`REL_6c88581e6d9e151736725473dd\` ON \`tbl_health_facilities\``);
        await queryRunner.query(`DROP INDEX \`REL_b5bc602ae9438bc4a3f7163716\` ON \`tbl_health_facilities\``);
        await queryRunner.query(`DROP INDEX \`REL_b81f2d17ddefde2982e915aed5\` ON \`tbl_credentials\``);
        await queryRunner.query(`DROP INDEX \`REL_f5ac126602d4e072f4d5097cb4\` ON \`tbl_payments\``);
        await queryRunner.query(`DROP INDEX \`REL_9a0f91f3bbec961c694b368795\` ON \`tbl_timeslot\``);
        await queryRunner.query(`DROP INDEX \`REL_ad77873650daf57d8d27f4b82a\` ON \`tbl_doctors\``);
        await queryRunner.query(`DROP INDEX \`REL_31e17263b181c25335d63d1b9f\` ON \`tbl_doctors\``);
        await queryRunner.query(`ALTER TABLE \`tbl_health_facilities\` DROP INDEX \`IDX_6c88581e6d9e151736725473dd\``);
        await queryRunner.query(`ALTER TABLE \`tbl_health_facilities\` DROP COLUMN \`profile_id\``);
        await queryRunner.query(`ALTER TABLE \`tbl_health_facilities\` DROP INDEX \`IDX_b5bc602ae9438bc4a3f7163716\``);
        await queryRunner.query(`ALTER TABLE \`tbl_health_facilities\` DROP COLUMN \`account_id\``);
        await queryRunner.query(`ALTER TABLE \`tbl_credentials\` DROP INDEX \`IDX_b81f2d17ddefde2982e915aed5\``);
        await queryRunner.query(`ALTER TABLE \`tbl_credentials\` DROP COLUMN \`account_id\``);
        await queryRunner.query(`ALTER TABLE \`tbl_payments\` DROP INDEX \`IDX_f5ac126602d4e072f4d5097cb4\``);
        await queryRunner.query(`ALTER TABLE \`tbl_payments\` DROP COLUMN \`appointment_id\``);
        await queryRunner.query(`ALTER TABLE \`tbl_appointments\` DROP COLUMN \`customer_id\``);
        await queryRunner.query(`ALTER TABLE \`tbl_appointments\` DROP COLUMN \`timeslot_id\``);
        await queryRunner.query(`ALTER TABLE \`tbl_timeslot\` DROP INDEX \`IDX_9a0f91f3bbec961c694b368795\``);
        await queryRunner.query(`ALTER TABLE \`tbl_timeslot\` DROP COLUMN \`schedule_type_id\``);
        await queryRunner.query(`ALTER TABLE \`tbl_timeslot\` DROP COLUMN \`schedule_id\``);
        await queryRunner.query(`ALTER TABLE \`tbl_schedules\` DROP COLUMN \`doctor_id\``);
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` DROP INDEX \`IDX_ad77873650daf57d8d27f4b82a\``);
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` DROP COLUMN \`profile_id\``);
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` DROP INDEX \`IDX_31e17263b181c25335d63d1b9f\``);
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` DROP COLUMN \`account_id\``);
        await queryRunner.query(`DROP INDEX \`REL_549a26f8a691cec95c57a036b4\` ON \`admin\``);
        await queryRunner.query(`DROP TABLE \`admin\``);
        await queryRunner.query(`DROP INDEX \`REL_5ed0145003b7e5b61ee7e4a809\` ON \`tbl_appointment_meeting\``);
        await queryRunner.query(`DROP TABLE \`tbl_appointment_meeting\``);
        await queryRunner.query(`DROP TABLE \`tbl_health_service_facilities\``);
        await queryRunner.query(`DROP TABLE \`tbl_role_permission\``);
        await queryRunner.query(`DROP TABLE \`tbl_schedule_types\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_c857dea1ed946598c27ec65ea1\` ON \`tbl_accounts\` (\`role_id\`)`);
    }

}
