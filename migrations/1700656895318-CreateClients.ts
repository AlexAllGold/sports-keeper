import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateClients1700656895318 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS clients
        (
            id          INT PRIMARY KEY AUTO_INCREMENT,
            firstName   VARCHAR(255) NOT NULL,
            lastName    VARCHAR(255) NOT NULL,
            dateOfBirth DATE         NOT NULL,
            email       VARCHAR(255) NOT NULL,
            clubId      INT          NOT NULL
        );
    `);

    await queryRunner.query(`
    ALTER TABLE clients
    ADD CONSTRAINT clubs_clients_fk FOREIGN KEY (clubId) REFERENCES clubs(id);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE clients');
  }
}
