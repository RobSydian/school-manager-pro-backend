import { Schema, Types, Model, model } from "mongoose";
import { Storage } from "../interfaces/storage.interface";

const StorageSchema = new Schema<Storage>(
  {
    filename: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    idUser: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const StorageModel = model("storage", StorageSchema);

export default StorageModel;
