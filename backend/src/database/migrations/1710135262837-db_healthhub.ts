import { MigrationInterface, QueryRunner } from "typeorm";

export class DbHealthhub1710135262837 implements MigrationInterface {
    name = 'DbHealthhub1710135262837'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`role\` (\`role_id\` int NOT NULL AUTO_INCREMENT, \`role_name\` varchar(50) NOT NULL, PRIMARY KEY (\`role_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`entities_role\` (\`entities_id\` int NOT NULL AUTO_INCREMENT, \`create_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`update_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`is_active\` bit NOT NULL DEFAULT 1, \`user_id\` int NULL, \`role_id\` int NULL, PRIMARY KEY (\`entities_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_profile\` (\`user_id\` int NOT NULL AUTO_INCREMENT, \`firstname\` varchar(50) NULL, \`lastname\` varchar(50) NULL, \`email\` varchar(100) NULL, \`username\` varchar(50) NULL, \`dateofbirth\` date NOT NULL, \`gender\` enum ('1', '2', '3') NOT NULL, \`create_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`update_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`is_active\` bit NOT NULL DEFAULT 1, PRIMARY KEY (\`user_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_entities\` (\`entity_id\` int NOT NULL AUTO_INCREMENT, \`enity_user\` json NULL, \`create_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`update_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`is_active\` bit NOT NULL DEFAULT 1, \`userProfileUserId\` int NULL, UNIQUE INDEX \`REL_51353729c3e9cb1e78ccfcb7cd\` (\`userProfileUserId\`), PRIMARY KEY (\`entity_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_credential\` (\`password_id\` int NOT NULL AUTO_INCREMENT, \`password_hash\` varchar(250) NOT NULL, \`password_salt\` varchar(250) NOT NULL, \`last_updated\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`userEntitiesEntityId\` int NULL, UNIQUE INDEX \`IDX_8d702c04302bc47271cc5a00e3\` (\`userEntitiesEntityId\`), UNIQUE INDEX \`REL_8d702c04302bc47271cc5a00e3\` (\`userEntitiesEntityId\`), PRIMARY KEY (\`password_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`schedule\` (\`medicine_schedule_id\` int NOT NULL AUTO_INCREMENT, \`datework\` date NOT NULL, \`starttime\` time NOT NULL, \`endtime\` time NOT NULL, \`cost\` bigint NOT NULL, \`doctor_id\` int NULL, PRIMARY KEY (\`medicine_schedule_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`time_slot\` (\`time_slot_id\` int NOT NULL AUTO_INCREMENT, \`period\` time NOT NULL, \`status\` bit NOT NULL DEFAULT 1, \`medicine_schedule_id\` int NULL, PRIMARY KEY (\`time_slot_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`parent\` (\`parent_id\` int NOT NULL AUTO_INCREMENT, \`entities_id\` int NULL, UNIQUE INDEX \`REL_07ca97e3c89e0850576e1c42ff\` (\`entities_id\`), PRIMARY KEY (\`parent_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`checkup\` (\`checkup_id\` int NOT NULL AUTO_INCREMENT, \`checkup_detail\` json NULL, \`checkup_name\` varchar(150) NOT NULL, PRIMARY KEY (\`checkup_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`parent_table\` (\`parent_id\` int NOT NULL AUTO_INCREMENT, \`checkup_id\` int NULL, PRIMARY KEY (\`parent_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`appointment\` (\`appointment_id\` int NOT NULL AUTO_INCREMENT, \`appointment_date\` time NOT NULL, \`appointment_description\` varchar(255) NOT NULL, \`status\` int NOT NULL, \`time_slot_id\` int NULL, \`customer_id\` int NULL, PRIMARY KEY (\`appointment_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`entities_role\` ADD CONSTRAINT \`FK_a4d86070670274a2d6eb62d9798\` FOREIGN KEY (\`user_id\`) REFERENCES \`user_profile\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`entities_role\` ADD CONSTRAINT \`FK_806333102ff4c6f1edc97203b5f\` FOREIGN KEY (\`role_id\`) REFERENCES \`role\`(\`role_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_entities\` ADD CONSTRAINT \`FK_51353729c3e9cb1e78ccfcb7cdb\` FOREIGN KEY (\`userProfileUserId\`) REFERENCES \`user_profile\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_credential\` ADD CONSTRAINT \`FK_8d702c04302bc47271cc5a00e34\` FOREIGN KEY (\`userEntitiesEntityId\`) REFERENCES \`user_entities\`(\`entity_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`schedule\` ADD CONSTRAINT \`FK_bab091ad4033b47e7aaa59bbc6f\` FOREIGN KEY (\`doctor_id\`) REFERENCES \`user_entities\`(\`entity_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`time_slot\` ADD CONSTRAINT \`FK_28860f3cea9a9fdc0394f517c3c\` FOREIGN KEY (\`medicine_schedule_id\`) REFERENCES \`schedule\`(\`medicine_schedule_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`parent\` ADD CONSTRAINT \`FK_07ca97e3c89e0850576e1c42ff2\` FOREIGN KEY (\`entities_id\`) REFERENCES \`user_entities\`(\`entity_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`parent_table\` ADD CONSTRAINT \`FK_a722309f8307dbe470adef863e1\` FOREIGN KEY (\`parent_id\`) REFERENCES \`parent\`(\`parent_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`parent_table\` ADD CONSTRAINT \`FK_a0f296f18e0303ce21ddd4d985f\` FOREIGN KEY (\`checkup_id\`) REFERENCES \`checkup\`(\`checkup_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`appointment\` ADD CONSTRAINT \`FK_e0b33b07a7c731e82a1d9772244\` FOREIGN KEY (\`time_slot_id\`) REFERENCES \`time_slot\`(\`time_slot_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`appointment\` ADD CONSTRAINT \`FK_6093cfbc767de74a62b7368b279\` FOREIGN KEY (\`customer_id\`) REFERENCES \`user_entities\`(\`entity_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`appointment\` DROP FOREIGN KEY \`FK_6093cfbc767de74a62b7368b279\``);
        await queryRunner.query(`ALTER TABLE \`appointment\` DROP FOREIGN KEY \`FK_e0b33b07a7c731e82a1d9772244\``);
        await queryRunner.query(`ALTER TABLE \`parent_table\` DROP FOREIGN KEY \`FK_a0f296f18e0303ce21ddd4d985f\``);
        await queryRunner.query(`ALTER TABLE \`parent_table\` DROP FOREIGN KEY \`FK_a722309f8307dbe470adef863e1\``);
        await queryRunner.query(`ALTER TABLE \`parent\` DROP FOREIGN KEY \`FK_07ca97e3c89e0850576e1c42ff2\``);
        await queryRunner.query(`ALTER TABLE \`time_slot\` DROP FOREIGN KEY \`FK_28860f3cea9a9fdc0394f517c3c\``);
        await queryRunner.query(`ALTER TABLE \`schedule\` DROP FOREIGN KEY \`FK_bab091ad4033b47e7aaa59bbc6f\``);
        await queryRunner.query(`ALTER TABLE \`user_credential\` DROP FOREIGN KEY \`FK_8d702c04302bc47271cc5a00e34\``);
        await queryRunner.query(`ALTER TABLE \`user_entities\` DROP FOREIGN KEY \`FK_51353729c3e9cb1e78ccfcb7cdb\``);
        await queryRunner.query(`ALTER TABLE \`entities_role\` DROP FOREIGN KEY \`FK_806333102ff4c6f1edc97203b5f\``);
        await queryRunner.query(`ALTER TABLE \`entities_role\` DROP FOREIGN KEY \`FK_a4d86070670274a2d6eb62d9798\``);
        await queryRunner.query(`DROP TABLE \`appointment\``);
        await queryRunner.query(`DROP TABLE \`parent_table\``);
        await queryRunner.query(`DROP TABLE \`checkup\``);
        await queryRunner.query(`DROP INDEX \`REL_07ca97e3c89e0850576e1c42ff\` ON \`parent\``);
        await queryRunner.query(`DROP TABLE \`parent\``);
        await queryRunner.query(`DROP TABLE \`time_slot\``);
        await queryRunner.query(`DROP TABLE \`schedule\``);
        await queryRunner.query(`DROP INDEX \`REL_8d702c04302bc47271cc5a00e3\` ON \`user_credential\``);
        await queryRunner.query(`DROP INDEX \`IDX_8d702c04302bc47271cc5a00e3\` ON \`user_credential\``);
        await queryRunner.query(`DROP TABLE \`user_credential\``);
        await queryRunner.query(`DROP INDEX \`REL_51353729c3e9cb1e78ccfcb7cd\` ON \`user_entities\``);
        await queryRunner.query(`DROP TABLE \`user_entities\``);
        await queryRunner.query(`DROP TABLE \`user_profile\``);
        await queryRunner.query(`DROP TABLE \`entities_role\``);
        await queryRunner.query(`DROP TABLE \`role\``);
    }

}
