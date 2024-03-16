import { MigrationInterface, QueryRunner } from "typeorm";

export class DbHealthhub1710614139399 implements MigrationInterface {
    name = 'DbHealthhub1710614139399'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tbl_reviews\` (\`review_id\` int NOT NULL AUTO_INCREMENT, \`doctor_id\` int NULL, \`customer_id\` int NULL, UNIQUE INDEX \`REL_b77b796951c8b046c42c8ca050\` (\`doctor_id\`), UNIQUE INDEX \`REL_c8ae8d1a4049b28a6651961704\` (\`customer_id\`), PRIMARY KEY (\`review_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_medical_records\` (\`medical_record_id\` int NOT NULL AUTO_INCREMENT, \`customer_id\` int NULL, \`doctor_id\` int NULL, PRIMARY KEY (\`medical_record_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`tbl_reviews\` ADD CONSTRAINT \`FK_b77b796951c8b046c42c8ca0502\` FOREIGN KEY (\`doctor_id\`) REFERENCES \`tbl_doctors\`(\`doctor_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_reviews\` ADD CONSTRAINT \`FK_c8ae8d1a4049b28a66519617044\` FOREIGN KEY (\`customer_id\`) REFERENCES \`tbl_customers\`(\`customer_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_medical_records\` ADD CONSTRAINT \`FK_35f33019503265fe8562397818f\` FOREIGN KEY (\`customer_id\`) REFERENCES \`tbl_customers\`(\`customer_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_medical_records\` ADD CONSTRAINT \`FK_50a6b27a1e8386f66fc36691725\` FOREIGN KEY (\`doctor_id\`) REFERENCES \`tbl_doctors\`(\`doctor_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tbl_medical_records\` DROP FOREIGN KEY \`FK_50a6b27a1e8386f66fc36691725\``);
        await queryRunner.query(`ALTER TABLE \`tbl_medical_records\` DROP FOREIGN KEY \`FK_35f33019503265fe8562397818f\``);
        await queryRunner.query(`ALTER TABLE \`tbl_reviews\` DROP FOREIGN KEY \`FK_c8ae8d1a4049b28a66519617044\``);
        await queryRunner.query(`ALTER TABLE \`tbl_reviews\` DROP FOREIGN KEY \`FK_b77b796951c8b046c42c8ca0502\``);
        await queryRunner.query(`DROP TABLE \`tbl_medical_records\``);
        await queryRunner.query(`DROP INDEX \`REL_c8ae8d1a4049b28a6651961704\` ON \`tbl_reviews\``);
        await queryRunner.query(`DROP INDEX \`REL_b77b796951c8b046c42c8ca050\` ON \`tbl_reviews\``);
        await queryRunner.query(`DROP TABLE \`tbl_reviews\``);
    }

}
