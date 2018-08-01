import { Router } from 'express';
import peopleRouter from './people';
import classesRouter from './classes';

let router = Router();

router.use('/classes', classesRouter);
router.use('/people', peopleRouter);

export default router;
