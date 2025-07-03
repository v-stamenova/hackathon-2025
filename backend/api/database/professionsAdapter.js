import { openDatabaseConnection, closeDatabaseConnection } from './database.js';

/**
 * executes SQL query that retrieves professions in random order
 * @param amount amount of professions to retrieve
 * @returns professions data from the database
 */
export async function getProfessionsData(amount) {
  return new Promise(async (resolve, reject) => {
    const db = await openDatabaseConnection();

    // Calculate the time 5 minutes ago to retrieve only professions
    // that were not seen after that time.
    const now = new Date()
    let fiveMinsAgo = new Date(now);
    fiveMinsAgo.setMinutes(now.getMinutes() - 5);

    const sql = `SELECT * FROM professions
      WHERE seen_at < '${fiveMinsAgo}'
      ORDER BY RANDOM()
      LIMIT ${amount}`;

    db.all(sql, (err, rows) => {
      closeDatabaseConnection(db);
      if (err) {
        console.error(err);
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}
  
/**
   * executes SQL query that looks for profession
   * with specified id and updates its score
   * @param {*} score score to be added
   * @param {*} professionId id of a profession that needs to be updated
   * @returns 
   */
export async function updateProfessionInstanceScore(score, professionId) {
  return new Promise(async (resolve, reject) => {
    const db = await openDatabaseConnection();
    const update = `UPDATE professions SET score = score + ${score}, seen_at = ${new Date()} WHERE id = ${professionId} AND score + ${score} > 0`;
      
    db.run(update, params, (err) => {
      closeDatabaseConnection(db);
  
      if (err) {
        console.error(err);
        reject(err);
      } else {
        resolve();
      }
    });
  });
}
