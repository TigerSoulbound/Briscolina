import express from 'express';

import * as controller from './controller.mjs';

export const router = express.Router();

router.get('/players/', controller.getPlayers);
router.get("/games/", controller.getGames);