import { MigrationInterface, QueryRunner } from "typeorm";

export class DbHealthhub1710576425422 implements MigrationInterface {
    name = 'DbHealthhub1710576425422'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tbl_timeslot\` (\`timeslot_id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`timeslot_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_specialties\` (\`specialist_id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`specialist_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_schedule_meeting\` (\`schedule_meeting_id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`schedule_meeting_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_schedules\` (\`schedule_id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`schedule_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_roles\` (\`role_id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`role_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_profiles\` (\`profile_id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`profile_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_permissions\` (\`permission_id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`permission_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_payments\` (\`payment_id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`payment_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_accounts\` (\`account_id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`account_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_appointments\` (\`appointment_id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`appointment_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_appointment_types\` (\`appointment_type_id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`appointment_type_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_categorys\` (\`category_id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`category_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_credentials\` (\`credential_id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`credential_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_customers\` (\`customer_id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`customer_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_doctors\` (\`doctor_id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`doctor_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_examination_service\` (\`examination_service_id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`examination_service_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_health_facilities\` (\`health_facility_id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`health_facility_id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`tbl_health_facilities\``);
        await queryRunner.query(`DROP TABLE \`tbl_examination_service\``);
        await queryRunner.query(`DROP TABLE \`tbl_doctors\``);
        await queryRunner.query(`DROP TABLE \`tbl_customers\``);
        await queryRunner.query(`DROP TABLE \`tbl_credentials\``);
        await queryRunner.query(`DROP TABLE \`tbl_categorys\``);
        await queryRunner.query(`DROP TABLE \`tbl_appointment_types\``);
        await queryRunner.query(`DROP TABLE \`tbl_appointments\``);
        await queryRunner.query(`DROP TABLE \`tbl_accounts\``);
        await queryRunner.query(`DROP TABLE \`tbl_payments\``);
        await queryRunner.query(`DROP TABLE \`tbl_permissions\``);
        await queryRunner.query(`DROP TABLE \`tbl_profiles\``);
        await queryRunner.query(`DROP TABLE \`tbl_roles\``);
        await queryRunner.query(`DROP TABLE \`tbl_schedules\``);
        await queryRunner.query(`DROP TABLE \`tbl_schedule_meeting\``);
        await queryRunner.query(`DROP TABLE \`tbl_specialties\``);
        await queryRunner.query(`DROP TABLE \`tbl_timeslot\``);
    }

}
