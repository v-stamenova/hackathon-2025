import { getProfessionsData, updateProfessionInstanceScore } from "../database/professionsAdapter.js";

/**
 * Calculate today's date.
 * @returns today's date.
 */
function getToday() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const currentDate = `${day}-${month}-${year}`;

  return currentDate;
}
  
const response = {
  meta: {
    date: getToday(),
  },
  data: {
    message: 'this route is not implemented yet',
  },
};

/**
 * Get professions data from the database.
 * @param {*} req incoming request.
 * @param {*} res response to be sent.
 * @param {*} next 
 */
export async function getProfessions(req, res, next) {
  try {
    const amount = req.query.amount;
    response.data = await getProfessionsData(amount);
    res.status(200).send(response);
  } catch (err) {
    next(err);
  }
}

/**
 * Update profession score in the database with a specified value.
 * @param {*} req incoming request.
 * @param {*} res response to be sent.
 * @param {*} next 
 */
export async function updateProfessionScore(req, res, next) {
  try {
    const score = req.query.score;
    const professionId = req.params.id;
    response.data = await updateProfessionInstanceScore(score, professionId);
    res.status(200).send(response);
  } catch (err) {
    next(err);
  }
}
