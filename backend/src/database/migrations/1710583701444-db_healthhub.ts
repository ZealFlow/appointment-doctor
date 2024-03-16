import { MigrationInterface, QueryRunner } from "typeorm";

export class DbHealthhub1710583701444 implements MigrationInterface {
    name = 'DbHealthhub1710583701444'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tbl_health_service_facilities\` DROP FOREIGN KEY \`FK_7226062aba803dfb9dda15eb342\``);
        await queryRunner.query(`DROP INDEX \`IDX_31e17263b181c25335d63d1b9f\` ON \`tbl_doctors\``);
        await queryRunner.query(`DROP INDEX \`IDX_ad77873650daf57d8d27f4b82a\` ON \`tbl_doctors\``);
        await queryRunner.query(`DROP INDEX \`IDX_9a0f91f3bbec961c694b368795\` ON \`tbl_timeslot\``);
        await queryRunner.query(`DROP INDEX \`IDX_f5ac126602d4e072f4d5097cb4\` ON \`tbl_payments\``);
        await queryRunner.query(`DROP INDEX \`IDX_6c88581e6d9e151736725473dd\` ON \`tbl_health_facilities\``);
        await queryRunner.query(`DROP INDEX \`IDX_b5bc602ae9438bc4a3f7163716\` ON \`tbl_health_facilities\``);
        await queryRunner.query(`DROP INDEX \`IDX_b81f2d17ddefde2982e915aed5\` ON \`tbl_credentials\``);
        await queryRunner.query(`CREATE TABLE \`tbl_category_health_facilities\` (\`category_health_facility_id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`category_health_facility_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_categories\` (\`category_id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`category_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`tbl_health_service_facilities\` ADD \`health_facility_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_health_service_facilities\` ADD \`category_health_facility_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_health_service_facilities\` ADD CONSTRAINT \`FK_51327881aeff789b7535ef9b5d0\` FOREIGN KEY (\`health_facility_id\`) REFERENCES \`tbl_health_facilities\`(\`health_facility_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_health_service_facilities\` ADD CONSTRAINT \`FK_6ad8e9589ba4fe3dc7a76290ebd\` FOREIGN KEY (\`category_health_facility_id\`) REFERENCES \`tbl_category_health_facilities\`(\`category_health_facility_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tbl_health_service_facilities\` DROP FOREIGN KEY \`FK_6ad8e9589ba4fe3dc7a76290ebd\``);
        await queryRunner.query(`ALTER TABLE \`tbl_health_service_facilities\` DROP FOREIGN KEY \`FK_51327881aeff789b7535ef9b5d0\``);
        await queryRunner.query(`ALTER TABLE \`tbl_health_service_facilities\` DROP COLUMN \`category_health_facility_id\``);
        await queryRunner.query(`ALTER TABLE \`tbl_health_service_facilities\` DROP COLUMN \`health_facility_id\``);
        await queryRunner.query(`DROP TABLE \`tbl_categories\``);
        await queryRunner.query(`DROP TABLE \`tbl_category_health_facilities\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_b81f2d17ddefde2982e915aed5\` ON \`tbl_credentials\` (\`account_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_b5bc602ae9438bc4a3f7163716\` ON \`tbl_health_facilities\` (\`account_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_6c88581e6d9e151736725473dd\` ON \`tbl_health_facilities\` (\`profile_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_f5ac126602d4e072f4d5097cb4\` ON \`tbl_payments\` (\`appointment_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_9a0f91f3bbec961c694b368795\` ON \`tbl_timeslot\` (\`schedule_type_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_ad77873650daf57d8d27f4b82a\` ON \`tbl_doctors\` (\`profile_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_31e17263b181c25335d63d1b9f\` ON \`tbl_doctors\` (\`account_id\`)`);
        await queryRunner.query(`ALTER TABLE \`tbl_health_service_facilities\` ADD CONSTRAINT \`FK_7226062aba803dfb9dda15eb342\` FOREIGN KEY (\`health_service_facility_id\`) REFERENCES \`tbl_health_facilities\`(\`health_facility_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
