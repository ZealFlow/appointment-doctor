import { MigrationInterface, QueryRunner } from "typeorm";

export class DbHealthhub1710584953944 implements MigrationInterface {
    name = 'DbHealthhub1710584953944'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tbl_category_doctor\` (\`category_health_facility_id\` int NOT NULL AUTO_INCREMENT, \`category_id\` int NULL, \`doctor_id\` int NULL, PRIMARY KEY (\`category_health_facility_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`tbl_category_health_facilities\` ADD \`category_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_category_health_facilities\` ADD \`health_facility_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_category_health_facilities\` ADD CONSTRAINT \`FK_997e8c0ebf0fdb4143482bf8dfb\` FOREIGN KEY (\`category_id\`) REFERENCES \`tbl_categories\`(\`category_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_category_health_facilities\` ADD CONSTRAINT \`FK_a7fbe86b48942e789aa1e58cabc\` FOREIGN KEY (\`health_facility_id\`) REFERENCES \`tbl_health_facilities\`(\`health_facility_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_category_doctor\` ADD CONSTRAINT \`FK_62486488651b78b90ce123e1126\` FOREIGN KEY (\`category_id\`) REFERENCES \`tbl_categories\`(\`category_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_category_doctor\` ADD CONSTRAINT \`FK_82a21e7635498e3685e9af2d189\` FOREIGN KEY (\`doctor_id\`) REFERENCES \`tbl_doctors\`(\`doctor_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tbl_category_doctor\` DROP FOREIGN KEY \`FK_82a21e7635498e3685e9af2d189\``);
        await queryRunner.query(`ALTER TABLE \`tbl_category_doctor\` DROP FOREIGN KEY \`FK_62486488651b78b90ce123e1126\``);
        await queryRunner.query(`ALTER TABLE \`tbl_category_health_facilities\` DROP FOREIGN KEY \`FK_a7fbe86b48942e789aa1e58cabc\``);
        await queryRunner.query(`ALTER TABLE \`tbl_category_health_facilities\` DROP FOREIGN KEY \`FK_997e8c0ebf0fdb4143482bf8dfb\``);
        await queryRunner.query(`ALTER TABLE \`tbl_category_health_facilities\` DROP COLUMN \`health_facility_id\``);
        await queryRunner.query(`ALTER TABLE \`tbl_category_health_facilities\` DROP COLUMN \`category_id\``);
        await queryRunner.query(`DROP TABLE \`tbl_category_doctor\``);
    }

}
