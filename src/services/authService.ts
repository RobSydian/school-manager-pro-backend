import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.model";
import { encrypt, verify } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({ email, password, name }: User) => {
  const existingUser = await UserModel.findOne({ email });
  if (existingUser) return "USER_ALREADY_EXISTS";
  const hashedPassword = await encrypt(password);
  const registerNewUser = await UserModel.create({
    email,
    password: hashedPassword,
    name,
  });

  return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const existingUser = await UserModel.findOne({ email });
  if (!existingUser) return "INVALID_DATA";

  const hashedPassword = existingUser.password;
  const isCorrect = await verify(password, hashedPassword);
  if (!isCorrect) return "INCORRECT_PASSWORD";

  const token = generateToken(existingUser.email);
  const data = {
    token,
    user: existingUser,
  };
  return data;
};

export { registerNewUser, loginUser };
