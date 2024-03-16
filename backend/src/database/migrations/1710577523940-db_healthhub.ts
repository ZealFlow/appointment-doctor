import { MigrationInterface, QueryRunner } from "typeorm";

export class DbHealthhub1710577523940 implements MigrationInterface {
    name = 'DbHealthhub1710577523940'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tbl_accounts\` ADD \`role_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_accounts\` ADD UNIQUE INDEX \`IDX_c857dea1ed946598c27ec65ea1\` (\`role_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_c857dea1ed946598c27ec65ea1\` ON \`tbl_accounts\` (\`role_id\`)`);
        await queryRunner.query(`ALTER TABLE \`tbl_accounts\` ADD CONSTRAINT \`FK_c857dea1ed946598c27ec65ea18\` FOREIGN KEY (\`role_id\`) REFERENCES \`tbl_roles\`(\`role_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tbl_accounts\` DROP FOREIGN KEY \`FK_c857dea1ed946598c27ec65ea18\``);
        await queryRunner.query(`DROP INDEX \`REL_c857dea1ed946598c27ec65ea1\` ON \`tbl_accounts\``);
        await queryRunner.query(`ALTER TABLE \`tbl_accounts\` DROP INDEX \`IDX_c857dea1ed946598c27ec65ea1\``);
        await queryRunner.query(`ALTER TABLE \`tbl_accounts\` DROP COLUMN \`role_id\``);
    }

}
