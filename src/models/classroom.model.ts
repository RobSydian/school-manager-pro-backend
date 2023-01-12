import { Schema, Types, Model, model } from "mongoose";
import { Classroom } from "../interfaces/classroom.interface";

const ClassroomSchema = new Schema<Classroom>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ClassroomModel = model("classrooms", ClassroomSchema);

export default ClassroomModel;
