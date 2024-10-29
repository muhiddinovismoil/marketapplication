import { createCategoryService } from "../service/index.js";

export const createCategoryController = async (req, res, next) => {
  try {

    const result = await createCategoryService(req.body);

    if (result.error) {
      return res.status(409).send(result.message);
    }



    res.send(result);
  } catch (error) {
    next(error);
  }
};
