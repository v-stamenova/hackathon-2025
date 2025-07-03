import sqlite3 from 'sqlite3';

export const DBSOURCE = './database/db.sqlite';

/**
 * Establishes a connection with the database
 * @returns database
 */
export async function openDatabaseConnection() {
  return new Promise(async (resolve, reject) => {
    const db = new sqlite3.Database(DBSOURCE, (err) => {
      if (err) {
        console.error(err.message);
        reject(err.message);
      } else {
        console.log('Connected to SQLite database.');
      }

      // Runs a query to check if the tables exists and if not create one
      db.get('SELECT count(*) AS tableUsersExists FROM sqlite_master WHERE type="table" AND name="users"', async (err, row) => {
        console.log(row);
        if (row.tableUsersExists == 0) {
          await createUsersTable(db);
        }

        resolve(db);
      });

      db.get('SELECT count(*) AS tableProfessionsExists FROM sqlite_master WHERE type="table" AND name="professions"', async (err, row) => {
        console.log(row);
        if (row.tableProfessionsExists == 0) {
          await createProfessionsTable(db);
        }

        resolve(db);
      });

      db.get('SELECT count(*) AS tableActivityExists FROM sqlite_master WHERE type="table" AND name="activity"', async (err, row) => {
        console.log(row);
        if (row.tableActivityExists == 0) {
          await createActivityTable(db);
        }

        resolve(db);
      });

      db.get('SELECT count(*) AS tableImagesExists FROM sqlite_master WHERE type="table" AND name="images"', async (err, row) => {
        console.log(row);
        if (row.tableImagesExists == 0) {
          await createImagesTable(db);
        }

        resolve(db);
      });
    });
  });
}

/**
 * Closes the established relationship with the database
 * @param {*} db The database that needs to be closed
 */
export function closeDatabaseConnection(db) {
  db.close((err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Closed the SQLite database connection.');
    }
  });
}

/**
 * Creates users table
 * @param {*} db the database in which the table should be created
 */
export async function createUsersTable(db) {
  return new Promise((resolve, reject) => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL, 
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL)`,
    (err) => {
      if (err) {
        console.error('Error creating table: ', err.message);
        console.log('Error creating table: ', err.message);
        reject(err.message);
      } else {
        console.log('Table users created.');
        resolve();
      }
    });
  });
}

/**
 * Creates professions table
 * @param {*} db 
 * @returns 
 */
async function createProfessionsTable(db) {
  return new Promise((resolve, reject) => {
    db.run(`CREATE TABLE professions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      domain TEXT NOT NULL,
      description TEXT NOT NULL,
      education_level TEXT NOT NULL,
      availability TEXT NOT NULL,
      themes TEXT NOT NULL,
      score INTEGER DEFAULT 0 NOT NULL,
      seen_at TEXT)`,
    (err) => {
      if (err) {
        console.error('Error creating table: ', err.message);
        reject(err.message);
      } else {
        console.log('Table professions created.');
        resolve();
      }
    });
  });
}


/**
 * Creates activity table
 * @param {*} db 
 * @returns 
 */
async function createActivityTable(db) {
  return new Promise((resolve, reject) => {
    db.run(`CREATE TABLE activity (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      profession_id INTEGER NOT NULL,
      time_spent INTEGER NOT NULL,
      is_liked INTEGER NOT NULL,
      is_description_opened INTEGER NOT NULL,
      FOREIGN KEY (profession_id) REFERENCES professions(id) ON DELETE CASCADE,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE)`,
    (err) => {
      if (err) {
        console.error('Error creating table: ', err.message);
        reject(err.message);
      } else {
        console.log('Table activity created.');
      }
    });
  });
}

/**
 * Creates images table
 * @param {*} db 
 * @returns 
 */
async function createImagesTable(db) {
  return new Promise((resolve, reject) => {
    db.run(`CREATE TABLE images (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        profession_id INTEGER NOT NULL,
        path TEXT NOT NULL,
        FOREIGN KEY (profession_id) REFERENCES professions(id) ON DELETE CASCADE)`,
    (err) => {
      if (err) {
        console.error('Error creating table: ', err.message);
        reject(err.message);
      } else {
        console.log('Table images created.');
        resolve();
      }
    });
  });
}
