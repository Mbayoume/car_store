import {
  Request,
  Response,
  NextFunction,
} from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { decode } from 'punycode';

export const authorized = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const auth_header: string | undefined =
      req.headers.authorization;
    const token: string = auth_header
      ? auth_header.split(' ')[1]
      : '';
    const decoded: string | object | undefined =
      jwt.verify(
        token as string,
        process.env.TOKEN_SECRET as string
      ) as JwtPayload;
    next();
  } catch (err) {
    res.status(401);
    throw new Error(
      'Error with authentication middleware' + err
    );
  }
};
