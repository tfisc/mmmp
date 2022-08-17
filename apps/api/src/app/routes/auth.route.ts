import express, { Router } from 'express';
import { validateRequestSchema } from '../middlewares/validateRequestSchema';
import { createUserSchema } from '../schemas/users/createUser.schema';
import { login } from '../services/auth.service';
import { postUser } from '../services/user.service';

const router: Router = express.Router();

router.post('/signup', createUserSchema, validateRequestSchema, postUser);
router.post('/login', createUserSchema, validateRequestSchema, login);

export default router;
