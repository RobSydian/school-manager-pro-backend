import { User } from "./types/user";
import express from "express";

const app = express();

const users: User[] = [{ name: "userOne" }, { name: "userTwo" }];

app.get("/api", (req, res) => {
  res.json(users);
});

app.listen(5000, () => console.log("Server started on port 5000"));
