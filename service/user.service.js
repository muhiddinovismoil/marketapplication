import { createUserModel, findUserByEmail } from "../model/index.js";

export const createUserService = async (user) => {
  try {
    const result = await createUserModel(user);

    return result;
  } catch (error) {
    throw new Error(error);
  }
};


export const findUser = async (email) => {
  try {
    const result = await findUserByEmail(email);

    return result
  } catch (error) {
    throw new Error(error);
  }
};
