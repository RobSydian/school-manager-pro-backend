import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getClassroom = (req: Request, res: Response) => {
  try {
    console.log("BOOO");
    res.send(req);
  } catch (e) {
    handleHttp(res, "ERROR_GET_CLASSROOM");
  }
};
const getClassrooms = (req: Request, res: Response) => {
  try {
    console.log("BAAA");

    res.send(req);
  } catch (e) {
    handleHttp(res, "ERROR_GET_CLASSROOMS");
  }
};
const updateClassroom = (req: Request, res: Response) => {
  try {
    res.send(req);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_CLASSROOM");
  }
};
const postClassroom = ({ body }: Request, res: Response) => {
  try {
    res.send(body);
  } catch (e) {
    handleHttp(res, "ERROR_POST_CLASSROOM");
  }
};
const deleteClassroom = (req: Request, res: Response) => {
  try {
    res.send(req);
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
