export enum Category {
  SuperAdmin = "superAdmin",
  Admin = "admin",
  Teacher = "teacher",
  Student = "student",
  External = "external",
}

export enum Discipline {
  Jazz = "jazz",
  Interpretation = "interpretation",
  Singing = "singing",
  ClassicalDance = "classicalDance",
  TapDance = "tapDance",
  VoiceCraft = "voiceCraft",
  Hiphop = "hiphop",
}

export enum Course {
  FirstYearProfessional = "First Year Professional",
  SecondYearProfessional = "Second Year Professional",
  ThirdYearProfessional = "Third Year Professional",
  FourthYearProfessional = "Fourth Year Professional",
  PrivateClasses = "Private Classes",
  DanceModule = "Dance Module",
  SingingModule = "Singing Module",
  DramaModule = "Drama Module",
}

export interface ContactDetails {
  id: number;
  student_id: number;
  home_address: string;
  post_code: number;
  phone_number1: number;
  phone_number2: number;
  primary_email: string;
  secondary_email: string;
  isRelative: boolean;
  contact_information: string;
}

export interface Person {
  id: number;
  name: string;
  surname1: string;
  surname2: string;
  id_number: string;
  contact_details: ContactDetails[];
  relevant_information: string;
}

export interface Student {
  id: number;
  person: Person;
  courses: Course;
  subjects: Discipline[];
  roles: Category[];
  reports: [];
  isActive: boolean;
}

export interface Classroom {
  id: number;
  name: string;
  description: string;
}

export type NewClassroomEntry = Omit<Classroom, "id">;
