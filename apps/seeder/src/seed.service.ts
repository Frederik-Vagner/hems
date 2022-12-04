import { Injectable, Logger } from '@nestjs/common';
import { Connection, DataSource } from 'typeorm';
import { AssignmentSeederService } from './services/assignments.service';
import { CarsSeederService } from './services/cars.service';
import { DocumentsSeederService } from './services/documents.service';
import { LuggagesSeederService } from './services/luggages.service';
import { TasksSeederService } from './services/tasks.service';
import { UsersSeederService } from './services/users.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly logger: Logger,
    private readonly connection: Connection,
    private readonly usersService: UsersSeederService,
    private readonly luggagesService: LuggagesSeederService,
    private readonly carsService: CarsSeederService,
    private readonly tasksService: TasksSeederService,
    private readonly assignmentService: AssignmentSeederService,
    private readonly documentService: DocumentsSeederService,
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
    await this.seedLuggages();
    await this.seedCars();
    await this.seedTasks();
    await this.seedAssignments();
    await this.seedDocuments();
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
      this.logger.debug(`✅ Users created: ${response.length} 🧔`);
      return response;
    } catch (error) {
      this.logger.warn(`❌ Users failed to seed 🌱`);
      this.logger.error(error);
    }
  }

  async seedLuggages() {
    try {
      const response = await Promise.all(this.luggagesService.create());
      this.logger.debug(`✅ Luggages created: ${response.length} 💼`);
      return response;
    } catch (error) {
      this.logger.warn(`❌ Luggages failed to seed 🌱`);
      this.logger.error(error);
    }
  }

  async seedCars() {
    try {
      const response = await Promise.all(this.carsService.create());
      this.logger.debug(`✅ Cars created: ${response.length} 🚕`);
      return response;
    } catch (error) {
      this.logger.warn(`❌ Cars failed to seed 🌱`);
      this.logger.error(error);
    }
  }

  async seedTasks() {
    try {
      const response = await Promise.all(this.tasksService.create());
      this.logger.debug(`✅ Tasks created: ${response.length} 📄`);
      return response;
    } catch (error) {
      this.logger.warn(`❌ Tasks failed to seed 🌱`);
      this.logger.error(error);
    }
  }

  async seedAssignments() {
    try {
      const response = await Promise.all(this.assignmentService.create());
      this.logger.debug(`✅ Assignments created: ${response.length} 💼`);
      return response;
    } catch (error) {
      this.logger.warn(`❌ Assignments failed to seed 🌱`);
      this.logger.error(error);
    }
  }

  async seedDocuments() {
    try {
      const response = await Promise.all(this.documentService.create());
      this.logger.debug(`✅ Documents created: ${response.length} 🗿`);
      return response;
    } catch (error) {
      this.logger.warn(`❌ Documents failed to seed 🌱`);
      this.logger.error(error);
    }
  }
}
