import { createMarketService } from "../service/index.js";

export const createMarketController = async (req, res, next) => {
  try {

    const result = await createMarketService(req.body);

    if (result.error) {
      return res.status(409).send(result.message);
    }



    res.send(result);
  } catch (error) {
    next(error);
  }
};
