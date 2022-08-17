import express, { Router } from 'express';
import { authenticateJWT } from '../middlewares/authenticateJWT';
import { validateAdminRole } from '../middlewares/validateAdminRole';
import { validateRequestSchema } from '../middlewares/validateRequestSchema';
import { createShiftchema } from '../schemas/shifts/createShift.schema';
import { getShifts, postShift } from '../services/shift.service';

const router: Router = express.Router();

router.post('/create', createShiftchema, validateRequestSchema, postShift);
router.get('/', authenticateJWT, validateAdminRole, getShifts);

export default router;
