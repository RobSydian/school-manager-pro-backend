import { Schema, Types, Model, model } from "mongoose";
import { Person } from "../interfaces/person.interface";

const PersonSchema = new Schema<Person>(
  {
    name: {
      type: String,
      required: true,
    },
    surname1: {
      type: String,
    },
    surname2: {
      type: String,
    },
    relevant_information: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const PersonModel = model("persons", PersonSchema);

export default PersonModel;
