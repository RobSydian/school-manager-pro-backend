// import { User } from "./src/types/user";
import express from "express";
import { router } from "./routes/index";

const app = express();
app.use(express.json());

const PORT = 5000;

// const users: User[] = [{ name: "userOne" }, { name: "userTwo" }];

app.get("/api", (_req, res) => {
  console.log("Someone pinged here!");
  res.send("pong");
});
console.log(router);
app.use("/api/", router);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
