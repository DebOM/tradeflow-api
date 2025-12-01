import { User } from "./user.types";

let users: User[] = [
  { id: 1, name: "Debasish", email: "deb@example.com" },
];

export const userRepository = {
  findAll: () => users,

  create: (user: User) => {
    users.push(user);
    return user;
  },
};

