import { Injectable, Logger } from '@nestjs/common';
import { Connection, DataSource } from 'typeorm';
import { UsersSeederService } from './services/users.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly logger: Logger,
    private readonly connection: Connection,
    private readonly usersService: UsersSeederService,
    private dataSource: DataSource
  ) {}

  // ========================
  // === MAIN SEED METHOD ===
  async seed() {
    // Clear database
    await this.resetDatabase();

    // Seed the entities
    // has to be done in specific order for proper relationship data population
    await this.seedUsers();
  }

  // ====================================
  // === DATABASE MANAGEMENT METHODS ====

  async getEntities() {
    const entities = [];
    try {
      this.connection.entityMetadatas.forEach((entity) =>
        entities.push({
          name: entity.name,
          tableName: entity.tableName,
        })
      );
      return entities;
    } catch (error) {
      this.logger.error(error, 'Unable to retrieve database metadata');
      return [];
    }
  }

  /**
   * Cleans all the entities
   * Removes all data from database
   */
  private async cleanAll(entities) {
    try {
      const dbType = this.connection.options.type;
      const tables = entities.map((entity) => '"' + entity.tableName + '"');

      if (dbType === 'mysql') {
        // Can't delete from nor truncate multiple tables at once
        // Can't truncate due to foreign key constraints
        for (const table of tables) {
          const query = `DELETE FROM ` + table.replaceAll(`"`, ``) + ';';
          await this.dataSource.query(query);
          console.log(`${table} has perished`);
        }
      }

      if (dbType === 'postgres') {
        const truncateSql = `TRUNCATE TABLE ${tables.join(
          ','
        )} RESTART IDENTITY CASCADE;`;
        await this.dataSource.query(truncateSql);
      }

      if (dbType === 'sqlite') {
        // There is no SQLite specific TRUNCATE TABLE command
        // Setting in typeorm config `dropSchema: true` clears database
      }
    } catch (error) {
      this.logger.error(error, 'Unable to clean database');
    }
  }

  /**
   * Reset the database, truncate all tables (remove all data)
   */
  async resetDatabase() {
    this.logger.debug('RESETTING DATABASE');

    const entities = await this.getEntities();
    await this.cleanAll(entities);

    this.logger.debug('✅ DATABASE RESET SUCCESSFUL');
  }

  // ====================================
  // === ENTITY SEEDING METHODS ====
  async seedUsers() {
    try {
      const response = await Promise.all(this.usersService.create());
      this.logger.debug(`✅ Users created: ${response.length}`);
      return response;
    } catch (error) {
      this.logger.warn(`❌ Users failed to seed`);
      this.logger.error(error);
    }
  }
}
