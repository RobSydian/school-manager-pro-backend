import { NewClassroomEntry } from "./types";

const parseName = (nameFromRequest: any): string => {
  if (!isString(nameFromRequest)) {
    throw new Error("Incorrect or missing name");
  }

  return nameFromRequest;
};

const parseDescription = (descriptionFromRequest: any): string => {
  if (!isString(descriptionFromRequest)) {
    throw new Error("Incorrect or missing description");
  }

  return descriptionFromRequest;
};

const isString = (string: string): boolean => {
  return typeof string === "string";
};

const toNewClassroom = (object: any): NewClassroomEntry => {
  const newEntry: NewClassroomEntry = {
    name: parseName(object.name),
    description: parseDescription(object.description),
  };

  return newEntry;
};

export default toNewClassroom;
