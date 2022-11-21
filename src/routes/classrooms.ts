import express from "express";
import * as classroomServices from "../services/classroomService";
import toNewClassroom from "../utils";
const router = express.Router();

router.get("/", (_req, res) => {
  res.send(classroomServices.getClassrooms());
});

router.get("/:id", (req, res) => {
  const classroom = classroomServices.findById(+req.params.id);
  return classroom !== null ? res.send(classroom) : res.sendStatus(404);
});

router.post("/", (req, res) => {
  try {
    const newClassroom = toNewClassroom(req.body);

    const addedNewClassroom = classroomServices.addClassroom(newClassroom);

    res.json(addedNewClassroom);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

export default router;
