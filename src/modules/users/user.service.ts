import { userRepository } from "./user.repository";
import { User } from "./user.types";

export const userService = {
  getAllUsers: () => {
    return userRepository.findAll();
  },

  createUser: (data: Omit<User, "id">) => {
    const newUser: User = {
      id: Date.now(),
      ...data,
    };

    return userRepository.create(newUser);
  },
};
