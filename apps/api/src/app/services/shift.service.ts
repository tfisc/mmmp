import { Request, Response } from 'express';
import { CreateShiftDTO } from '../../../../../libs/api-interfaces/src/lib/shifts.type';
import { createShift, getAllShifts } from '../models/shifts.model';

export const postShift = async (
  req: Request<unknown, unknown, CreateShiftDTO>,
  res: Response
) => {
  try {
    res.status(200).send(await createShift(req.body));
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getShifts = async (req, res: Response) => {
  try {
    res.status(200).send(await getAllShifts());
  } catch (error) {
    res.status(500).send(error);
  }
};
