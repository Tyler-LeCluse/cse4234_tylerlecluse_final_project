import express from 'express';

import { login, signUp } from '../controllers/users.js';

const router = express.Router();

router.get('/login', login);
router.get('/signUp', signUp);

export default router;