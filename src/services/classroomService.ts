// File in charge of business logic for classroom

import { Classroom } from "../interfaces/classroom.interface";
import ClassroomModel from "../models/classroom.model";

const insertClassroomDB = async (classroom: Classroom) => {
  const responseInsert = await ClassroomModel.create(classroom);
  return responseInsert;
};

const getClassroomsDB = async () => {
  const response = await ClassroomModel.find({});
  return response;
};

const getClassroomDB = async (id: string) => {
  const response = await ClassroomModel.findOne({ _id: id });
  return response;
};

const updateClassroomDB = async (id: string, data: Classroom) => {
  const response = await ClassroomModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return response;
};

const deleteClassroomDB = async (id: string) => {
  const response = await ClassroomModel.deleteOne({ _id: id });
  return response;
};

export {
  insertClassroomDB,
  getClassroomsDB,
  getClassroomDB,
  updateClassroomDB,
  deleteClassroomDB,
};
