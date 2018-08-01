import { Router } from 'express';
import peopleRouter from './people';
import classesRouter from './classes';
import testRouter from './test';

let router = Router();

router.use('/classes', classesRouter);
router.use('/people', peopleRouter);
router.use('/test', testRouter);

export default router;
