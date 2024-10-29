import { createProductService } from "../service/index.js";

export const createProductController = async (req, res, next) => {
  try {

    const result = await createProductService(req.body);

    if (result.error) {
      return res.status(409).send(result.message);
    }



    res.send(result);
  } catch (error) {
    next(error);
  }
};
