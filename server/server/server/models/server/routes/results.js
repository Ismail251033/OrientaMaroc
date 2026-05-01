import { Router } from 'express';
import { v4 as uuid } from 'uuid';
import Result from '../models/Result.js';

const router = Router();

// POST /api/results — Sauvegarde résultats
router.post('/', async (req, res, next) => {
  try {
    const { profile, results } = req.body;
    if (!profile || !results)
      return res.status(400).json({ success: false, message: 'Données manquantes' });

    const sessionId = uuid();
    const doc = await Result.create({ sessionId, profile, results });
    res.status(201).json({ success: true, sessionId, id: doc._id });
  } catch (err) { next(err); }
});

// GET /api/results/:sessionId
router.get('/:sessionId', async (req, res, next) => {
  try {
    const doc = await Result.findOne({ sessionId: req.params.sessionId });
    if (!doc) return res.status(404).json({ success: false, message: 'Session introuvable' });
    res.json({ success: true, data: doc });
  } catch (err) { next(err); }
});

export default router;