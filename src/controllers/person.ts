import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";

import { handleHttp } from "../utils/error.handle";

interface RequestEx extends Request {
  user?: string | JwtPayload;
}

const getPersons = async (req: RequestEx, res: Response) => {
  try {
    res.send({
      data: "THIS IS ONLY VISIBLE WITH USERS WITH VALID JWT",
      user: req.user,
    });
  } catch (e) {
    handleHttp(res, "ERROR_GET_PERSONS");
  }
};

export { getPersons };
