import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {

    const users = [
    { id: 1, name: "johny cash" },
    { id: 2, name: "john doe" },
    { id: 3, name: "Anuradha Miller" },
  ];

  res.json({
    success: true,
    data: users,
  });
};