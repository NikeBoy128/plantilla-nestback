import { MigrationInterface, QueryRunner } from "typeorm";

export class Updatename1724944758550 implements MigrationInterface {
    name = 'Updatename1724944758550'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Posts\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`content\` text NOT NULL, \`userCreatorId\` bigint NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` timestamp(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`PostCategories\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`postId\` bigint NOT NULL, \`categoryId\` bigint NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Categories\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`description\` varchar(100) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Preferences\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`userId\` bigint NOT NULL, \`categoryId\` bigint NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Users\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NULL, \`lastName\` varchar(102) NULL, \`avatarUrl\` varchar(255) NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, \`userName\` varchar(255) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` timestamp(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Posts\` ADD CONSTRAINT \`FK_e56c3332152c28e606f0a9a3c12\` FOREIGN KEY (\`userCreatorId\`) REFERENCES \`Users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`PostCategories\` ADD CONSTRAINT \`FK_7369eec4c6092d7537e73d87a31\` FOREIGN KEY (\`postId\`) REFERENCES \`Posts\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`PostCategories\` ADD CONSTRAINT \`FK_34205699df12c9944b51c90a0f7\` FOREIGN KEY (\`categoryId\`) REFERENCES \`Categories\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Preferences\` ADD CONSTRAINT \`FK_a4cd1a6428e5aea9ba0da9522ea\` FOREIGN KEY (\`userId\`) REFERENCES \`Users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Preferences\` ADD CONSTRAINT \`FK_2ed631284c1f8ea8ef54df9e7ab\` FOREIGN KEY (\`categoryId\`) REFERENCES \`Categories\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Preferences\` DROP FOREIGN KEY \`FK_2ed631284c1f8ea8ef54df9e7ab\``);
        await queryRunner.query(`ALTER TABLE \`Preferences\` DROP FOREIGN KEY \`FK_a4cd1a6428e5aea9ba0da9522ea\``);
        await queryRunner.query(`ALTER TABLE \`PostCategories\` DROP FOREIGN KEY \`FK_34205699df12c9944b51c90a0f7\``);
        await queryRunner.query(`ALTER TABLE \`PostCategories\` DROP FOREIGN KEY \`FK_7369eec4c6092d7537e73d87a31\``);
        await queryRunner.query(`ALTER TABLE \`Posts\` DROP FOREIGN KEY \`FK_e56c3332152c28e606f0a9a3c12\``);
        await queryRunner.query(`DROP TABLE \`Users\``);
        await queryRunner.query(`DROP TABLE \`Preferences\``);
        await queryRunner.query(`DROP TABLE \`Categories\``);
        await queryRunner.query(`DROP TABLE \`PostCategories\``);
        await queryRunner.query(`DROP TABLE \`Posts\``);
    }

}
