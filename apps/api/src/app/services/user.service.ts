import { Request, Response } from 'express';
import { CreateUserDTO } from 'libs/api-interfaces/src/lib/users.type';
import { createUser, findUserByEmail } from '../models/users.model';
export const postUser = async (
  req: Request<unknown, unknown, CreateUserDTO>,
  res: Response
) => {
  try {
    const doesUserAlreadyExist = await findUserByEmail(req.body.email);
    if (!doesUserAlreadyExist) {
      const user = await createUser(req.body);
      delete user.password;
      delete user.role;
      res.status(200).send(user);
    } else {
      res.status(400).send(new Error('A user with this email already exists'));
    }
  } catch (error) {
    res.status(401).send(error);
  }
};
