import { Router } from "express";
import { registerController, loginController } from "../controllers/auth";

const router = Router();

/** http://localhost:5000/auth/login or register [POST] */
router.post("/register", registerController);
router.post("/login", loginController);

export { router };
