import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestEx extends Request {
  user?: string | JwtPayload;
}

const checkJWT = (req: RequestEx, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop();
    const isUser = verifyToken(`${jwt}`);
    if (!isUser) {
      res.status(401);
      res.send("JWT_NOT_VALID");
    } else {
      req.user = isUser;
      console.log({ jwt });
      next();
    }
  } catch (error) {
    res.status(400);
    res.send("INVALID_SESSION");
  }
};

export { checkJWT };
