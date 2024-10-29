import { createUserService, findUser } from "../service/index.js";

export const registerController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("EMAIL OR PASSWORD is not valid");
    }

    console.log(req.body)
    const result = await createUserService(req.body);

    if (result.error) {
      return res.status(409).send(result.message);
    }


    const { password :pw , ...data} = result[0]

    res.send(data);
  } catch (error) {
    next(error);
  }
};



export const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("EMAIL OR PASSWORD is not valid");
    }

    console.log(req.body)
    const result = await findUser(email);

    if(result.length === 0){
      return res.status(404).send("USER NOT FOUND!")
    }
    
    if(password !== result[0].password){
      return res.status(404).send("EMAIL OR PASSWORD is  WRONG!")
    }

    res.send("SUCCESSFULLY LOGGED IN ");
  } catch (error) {
    next(error);
  }
};
