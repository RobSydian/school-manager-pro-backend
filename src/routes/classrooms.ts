import { Router } from "express";
import {
  deleteClassroom,
  getClassroom,
  getClassrooms,
  postClassroom,
  updateClassroom,
} from "../controllers/classroom";

const router = Router();

router.get("/", getClassrooms);
router.get("/:id", getClassroom);
router.post("/", postClassroom);
router.put("/:id", updateClassroom);
router.delete("/:id", deleteClassroom);

export { router };
