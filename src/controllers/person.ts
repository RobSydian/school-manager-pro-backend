import { Request, Response } from "express";
import { RequestExt } from "../interfaces/request-ext";

import { handleHttp } from "../utils/error.handle";

const getPersons = async (req: RequestExt, res: Response) => {
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
