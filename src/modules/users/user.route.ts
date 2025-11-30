import { Router, Request, Response } from 'express';
import { getUsers } from './user.controller';

export const userRouter = Router();

userRouter.get('/', getUsers);



