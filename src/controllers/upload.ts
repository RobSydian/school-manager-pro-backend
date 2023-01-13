import { Response } from "express";
import { RequestExt } from "../interfaces/request-ext";
import { Storage } from "../interfaces/storage.interface";
import { registerUpload } from "../services/storageService";
import { handleHttp } from "../utils/error.handle";

const getFile = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req;
    const dataToRegister: Storage = {
      filename: `${file?.filename}`,
      idUser: `${user?.id}`,
      path: `${file?.path}`,
    };
    const response = await registerUpload(dataToRegister);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_FILE");
  }
};

export { getFile };
