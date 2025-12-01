import { Router, Request, Response } from 'express';
import { getUsers, createUser } from './user.controller';

export const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.post("/", createUser);