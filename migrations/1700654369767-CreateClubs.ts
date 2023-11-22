import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateClubs1700654369767 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS clubs
        (
            id          INT PRIMARY KEY AUTO_INCREMENT,
            name        VARCHAR(255) NOT NULL,
            address     VARCHAR(255) NOT NULL,
            description VARCHAR(255) NOT NULL
        );

    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE clubs');
  }
}
