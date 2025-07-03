import express from 'express';
import cors from 'cors';
import { createProxyMiddleware, fixRequestBody } from 'http-proxy-middleware';
import morgan from 'morgan';
import { requireAuth } from '../middleware/authMiddleware.js';
import { register, login } from '../controllers/authController.js';

const router = express.Router();
router.use(cors({
  credentials: true,
  origin: true
}));
router.use(morgan());

router.post('/register', cors(), register);
router.post('/login', cors(), login);

// Route to make sure user is authenticated
router.get('/verify', requireAuth, cors(), (req, res) => {
  res.status(200).send({'message': 'User is authenticated'});
});

export default router;