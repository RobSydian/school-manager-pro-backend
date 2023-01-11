import "dotenv/config";
import express from "express";
import { router } from "./routes/index";
import cors from "cors";
import db from "./config/mongo";

const PORT = process.env.PORT || 5001;

const app = express();
app.use(cors());
app.use(express.json());

app.use(router);
db().then(() => console.log("Connection ready"));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
