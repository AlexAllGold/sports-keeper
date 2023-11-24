import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateLoggers1700657666618 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
 await queryRunner.query(`
     CREATE TABLE IF NOT EXISTS loggers
     (
         id        INT PRIMARY KEY AUTO_INCREMENT,
         level     VARCHAR(16)   NOT NULL,
         message   VARCHAR(2048) NOT NULL,
         meta      VARCHAR(2048) NOT NULL,
         timestamp DATE          NOT NULL
     );
 `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE loggers');
    }
}
