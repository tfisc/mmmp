import { Request, Response, NextFunction } from 'express';
export const validateAdminRole = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.role === 'admin') {
    next();
  } else {
    res.sendStatus(403);
  }
};
