import { MigrationInterface, QueryRunner } from "typeorm";

export class DbHealthhub1710618982256 implements MigrationInterface {
    name = 'DbHealthhub1710618982256'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` CHANGE \`specialization\` \`time_slot_id\` varchar(100) NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_specialties\` CHANGE \`license_diagnosis\` \`specialist_name\` varchar(200) NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_accounts\` ADD \`firstname\` varchar(50) NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_accounts\` ADD \`lastname\` varchar(50) NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` DROP COLUMN \`time_slot_id\``);
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` ADD \`time_slot_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` ADD UNIQUE INDEX \`IDX_74834d370489d5c97046a9d6ef\` (\`time_slot_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_74834d370489d5c97046a9d6ef\` ON \`tbl_doctors\` (\`time_slot_id\`)`);
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` ADD CONSTRAINT \`FK_74834d370489d5c97046a9d6efc\` FOREIGN KEY (\`time_slot_id\`) REFERENCES \`tbl_timeslot\`(\`timeslot_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` DROP FOREIGN KEY \`FK_74834d370489d5c97046a9d6efc\``);
        await queryRunner.query(`DROP INDEX \`REL_74834d370489d5c97046a9d6ef\` ON \`tbl_doctors\``);
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` DROP INDEX \`IDX_74834d370489d5c97046a9d6ef\``);
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` DROP COLUMN \`time_slot_id\``);
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` ADD \`time_slot_id\` varchar(100) NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_accounts\` DROP COLUMN \`lastname\``);
        await queryRunner.query(`ALTER TABLE \`tbl_accounts\` DROP COLUMN \`firstname\``);
        await queryRunner.query(`ALTER TABLE \`tbl_specialties\` CHANGE \`specialist_name\` \`license_diagnosis\` varchar(200) NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_doctors\` CHANGE \`time_slot_id\` \`specialization\` varchar(100) NULL`);
    }

}
