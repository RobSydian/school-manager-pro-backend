import { Storage } from "../interfaces/storage.interface";
import StorageModel from "../models/storage";

const registerUpload = async ({ filename, path, idUser }: Storage) => {
  const response = await StorageModel.create({ filename, path, idUser });
  return response;
};

export { registerUpload };
