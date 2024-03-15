import { MigrationInterface, QueryRunner } from "typeorm";

export class DbHealthhub1710262575144 implements MigrationInterface {
    name = 'DbHealthhub1710262575144'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_entities\` CHANGE \`is_active\` \`is_active\` bit NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`entities_role\` CHANGE \`is_active\` \`is_active\` bit NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`user_profile\` CHANGE \`is_active\` \`is_active\` bit NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`time_slot\` CHANGE \`status\` \`status\` bit NOT NULL DEFAULT 1`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`time_slot\` CHANGE \`status\` \`status\` bit NOT NULL DEFAULT 'b'1''`);
        await queryRunner.query(`ALTER TABLE \`user_profile\` CHANGE \`is_active\` \`is_active\` bit NOT NULL DEFAULT 'b'1''`);
        await queryRunner.query(`ALTER TABLE \`entities_role\` CHANGE \`is_active\` \`is_active\` bit NOT NULL DEFAULT 'b'1''`);
        await queryRunner.query(`ALTER TABLE \`user_entities\` CHANGE \`is_active\` \`is_active\` bit NOT NULL DEFAULT 'b'1''`);
    }

}
