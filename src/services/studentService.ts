import PersonModel from "../models/person.model";

const getStudentsDB = async () => {
  const response = await PersonModel.find({});
  return response;
};

export { getStudentsDB };
