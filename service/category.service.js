import { createCategoryModel, deleteCategoryById, findCategoryById, updateCategoryById } from "../model/index.js";

export const createCategoryService = async (market) => {
  try {
    const result = await createCategoryModel(market);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const findCategoryService = async (id) => {
  try {
    const result = await findCategoryById(id);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateCategoryService = async (product, id) => {
  try {
    const oldProduct = await findCategoryById(id);

    const newProduct = {
      ...oldProduct[0],
      ...product,
    };

    const result = await updateCategoryById(newProduct, id);

    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};



export const deleteCategoryService = async (id) => {
  try {
    const product = await findCategoryById(id);

    if(product.length ===0){
      return {
        error:true,
        message:"PRODUCT not found"
      }
    }

    await deleteCategoryById()
  } catch (error) {
    throw new Error(error.message);
  }
};
