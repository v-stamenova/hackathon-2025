import { getProfessions, updateProfessionScore } from '../controllers/professionsController.js';
import express from 'express';
import cors from 'cors';
const router = express.Router();

router.get('/', (req, res) => {
  res.json('Hi from the backend');
});

router.options('/professions', (req, res, next) => {
  try {
    //set header before response
    res.header({
      allow: 'GET, POST, OPTIONS',
      'Content-type': 'application/json',
      Data: Date.now(),
      'Content-length': 0,
    });
    //response
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

router.get('/professions', cors(), getProfessions);

router.post('/professions/:id', cors(), updateProfessionScore);

export default router;