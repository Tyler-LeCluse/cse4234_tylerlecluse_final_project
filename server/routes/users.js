import express from 'express';

import { getLikedMovies, likeMovie, logout, login, signUp } from '../controllers/users.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/login', login);
router.get('/logout', logout);
router.get('/getLikedMovies', auth, getLikedMovies);
router.post('/signUp', signUp);
router.patch('/likeMovie', auth, likeMovie);

export default router;