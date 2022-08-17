import { Request, Response } from 'express';
import { CreateUserDTO, User } from 'libs/api-interfaces/src/lib/users.type';
import { findUserByEmail } from '../models/users.model';
import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from 'jsonwebtoken';
export const login = async (
  req: Request<unknown, unknown, CreateUserDTO>,
  res: Response
) => {
  try {
    const user = await findUserByEmail(req.body.email);
    if (user) {
      const isPasswordValid = await validatePassword(
        req.body.password,
        user.password
      );
      if (isPasswordValid) {
        const accesToken = generateAccessToken(user);
        delete user.password;
        delete user.role;
        res.status(200).send({ user, access_token: accesToken });
      } else {
        res.status(401).send(new Error('Invalid credentials'));
      }
    } else {
      res.status(401).send(new Error('Invalid credentials'));
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const validatePassword = async (
  passwordFromRequest: string,
  actualPassword: string
): Promise<boolean> => {
  return bcrypt.compare(passwordFromRequest, actualPassword);
};

const generateAccessToken = (user: User): string => {
  return jwt.sign(
    { id: user.id, role: user.role, email: user.email },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '100d' }
  );
};

export const validateAccessToken = (token: string): JwtPayload => {
  return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET) as JwtPayload;
};
