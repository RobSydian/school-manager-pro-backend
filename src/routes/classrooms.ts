import { Router } from "express";
import {
  deleteClassroom,
  getClassroom,
  getClassrooms,
  postClassroom,
  updateClassroom,
} from "../controllers/classroom";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", getClassrooms);
router.get("/:id", logMiddleware, getClassroom);
router.post("/", postClassroom);
router.put("/:id", updateClassroom);
router.delete("/:id", deleteClassroom);

export { router };
