import {
  createCategoryTable,
  createMarketTable,
  createProductTable,
  createUserTable,
  dropTables,
} from "../migrations/index.js";

export const setUpController = async (req, res, next) => {
  try {
    await createUserTable();
    await createMarketTable();
    await createCategoryTable();
    await createProductTable();
    res.send("TABLES CREATED");
  } catch (error) {
    next(error);
  }
};

export const dropController = async (req, res, next) => {
  try {
    await dropTables();
    res.send("TABLES DROPED");
  } catch (error) {
    next(error);
  }
};
