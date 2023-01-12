import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/authService";

const registerController = async ({ body }: Request, res: Response) => {
  const responseUser = await registerNewUser(body);
  console.log(responseUser);
  res.send(responseUser);
};

const loginController = async ({ body }: Request, res: Response) => {
  const { email, password } = body;
  const responseUser = await loginUser({ email, password });
  if (responseUser === "INCORRECT_PASSWORD") {
    res.status(403);
    res.send(responseUser);
  } else {
    res.send(responseUser);
  }
};

export { registerController, loginController };
