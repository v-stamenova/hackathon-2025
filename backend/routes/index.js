import express from 'express';
import cors from 'cors';
const router = express.Router();

router.get('/', (req, res) => {
  res.json('Hi from the backend');
});

export default router;