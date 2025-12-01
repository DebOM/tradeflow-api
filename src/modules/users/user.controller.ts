import { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler";
import { userService } from "./user.service";
import { createUserSchema } from "./user.validation";
import { ApiError } from "../../utils/ApiError";


export const getUsers = asyncHandler(async (req: Request, res: Response) => {
  const users = userService.getAllUsers();
  res.json({ success: true, data: users });
});

export const createUser = asyncHandler(async (req: Request, res: Response) => {
  const parsed = createUserSchema.safeParse(req.body);

  if (!parsed.success) {
    throw new ApiError(400, parsed.error.issues[0].message);
  }

  const user = userService.createUser(parsed.data);

  res.status(201).json({
    success: true,
    data: user,
  });
});