import { Request, Response } from "express";
import {
  insertClassroomDB,
  getClassroomsDB,
  getClassroomDB,
  updateClassroomDB,
  deleteClassroomDB,
} from "../services/classroomService";
import { handleHttp } from "../utils/error.handle";

const getClassroom = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getClassroomDB(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_CLASSROOM");
  }
};
const getClassrooms = async (req: Request, res: Response) => {
  try {
    const response = await getClassroomsDB();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_CLASSROOMS");
  }
};
const updateClassroom = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateClassroomDB(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_CLASSROOM");
  }
};
const postClassroom = async ({ body }: Request, res: Response) => {
  try {
    const responseClassroom = await insertClassroomDB(body);
    res.send(responseClassroom);
  } catch (e) {
    handleHttp(res, "ERROR_POST_CLASSROOM", e);
  }
};
const deleteClassroom = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteClassroomDB(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_CLASSROOM");
  }
};

export {
  getClassroom,
  getClassrooms,
  updateClassroom,
  postClassroom,
  deleteClassroom,
};
