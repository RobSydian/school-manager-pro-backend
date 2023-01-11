import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFilename = (filename: string) => {
  const file = filename.split(".").shift();
  return file;
};

readdirSync(PATH_ROUTER).filter((filename) => {
  const cleanName = cleanFilename(filename);

  if (cleanName !== "index") {
    import(`./${cleanName}`).then((routerModule) => {
      console.log(`Loading route ${cleanName}`);
      router.use(`${cleanName}`, routerModule.router);
    });
  }
});

export { router };
