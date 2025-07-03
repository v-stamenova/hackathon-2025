import sqlite3 from 'sqlite3';
import json_media from '../json_jobs/finished_digitaal_media_entertainment_jobs.json' with { type: 'json'};
import json_energie from '../json_jobs/finished_energie_water_veiligheid_jobs.json' with { type: 'json'};
import json_tech from '../json_jobs/finished_hi_tech_science_jobs.json' with { type: 'json'};
import json_health from '../json_jobs/finished_mens_en_gezondheid_jobs.json' with { type: 'json'};
import json_design from '../json_jobs/finished_ontwerp_productie_wereldhandel_jobs.json' with { type: 'json'};
import json_food from '../json_jobs/finished_voeding_natuur.json' with { type: 'json'};
import json_traffic from '../json_jobs/finished_wonen_werken_verkeer_jobs.json' with { type: 'json'};

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
      creative TEXT NOT NULL,
      design_oriented TEXT NOT NULL,
      physical TEXT NOT NULL,
      sustainability_focussed TEXT NOT NULL,
      analytical TEXT NOT NULL,
      social_interaction TEXT NOT NULL,
      consulting TEXT NOT NULL,
      score INTEGER DEFAULT 0 NOT NULL,
      seen_at TEXT)`,
    (err) => {
      if (err) {
        console.error('Error creating table: ', err.message);
        reject(err.message);
      } else {
        console.log('Table professions created.');
        const insertQuery = 'INSERT INTO professions (title, domain, description, education_level, availability, creative, design_oriented, physical, sustainability_focussed, analytical, social_interaction, consulting) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)';

        const allJobs = [
          ...json_media,
          ...json_energie,
          ...json_tech,
          ...json_health,
          ...json_design,
          ...json_food,
          ...json_traffic
        ];

        const professions = allJobs.map(job => ({
          title: job.job_title,
          domain: job.domain,
          description: job.description,
          education_level: job.education_level,
          availability: job.job_outlook,
          creative: job.themes[0],
          design_oriented: job.themes[1],
          physical: job.themes[2],
          sustainability_focussed: job.themes[3],
          analytical: job.themes[4],
          social_interaction: job.themes[5],
          consulting: job.themes[6],
        }));

        professions.forEach(({ title, domain, description, education_level, availability, creative, design_oriented, physical, sustainability_focussed, analytical, social_interaction, consulting }) => {
          db.run(insertQuery, [title, domain, description, education_level, availability, creative, design_oriented, physical, sustainability_focussed, analytical, social_interaction, consulting], (err) => {
            if (err) {
              console.error(`Error inserting data for job ${title}: `, err.message);
              reject(err.message);
            } else {
              console.log(`Data inserted for job: ${title}`);
            }
          });
        });
        console.log('Data inserted successfully.');
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
