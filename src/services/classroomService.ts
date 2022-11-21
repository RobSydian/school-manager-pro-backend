import { Classroom, NewClassroomEntry } from "../types";
import classroomExample from "../types/classroomExample.json";

const classrooms: Classroom[] = classroomExample as Classroom[];

export const getClassrooms = (): Classroom[] => classrooms;

export const findById = (id: number): Classroom | undefined => {
  const entry = classrooms.find((result) => result.id === id);
  return entry;
};

export const addClassroom = (
  newClassroomEntry: NewClassroomEntry
): Classroom => {
  const newClassroom = {
    id: classrooms.length + 1,
    ...newClassroomEntry,
  };
  classrooms.push(newClassroom);
  return newClassroom;
};
