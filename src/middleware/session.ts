import { NextFunction, Request, Response } from "express";
import { RequestExt } from "../interfaces/request-ext";
import { verifyToken } from "../utils/jwt.handle";

const checkJWT = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop();
    const isUser = verifyToken(`${jwt}`) as { id: string };
    if (!isUser) {
      res.status(401);
      res.send("JWT_NOT_VALID");
    } else {
      req.user = isUser;
      next();
    }
  } catch (error) {
    res.status(400);
    res.send("INVALID_SESSION");
  }
};

export { checkJWT };
