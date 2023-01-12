import { Router } from "express";
import { getPersons } from "../controllers/person";
import { checkJWT } from "../middleware/session";

const router = Router();

/** Route only accessible to people with an active session
 * with a valid JWT
 */
router.get("/", checkJWT, getPersons);

export { router };
