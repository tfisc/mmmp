import { Request, Response, NextFunction } from 'express';
import { validateAccessToken } from '../services/auth.service';
export const authenticateJWT = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];
    const payload = validateAccessToken(token);
    req.role = payload.role;
    req.userId = payload.id;
    next();
  } else {
    res.sendStatus(401);
  }
};
