import { createMarketModel } from "../model/index.js";

export const createMarketService = async (market) => {
  try {
    const result = await createMarketModel(market);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const findMarketService = async (id) => {
  try {
    const result = await findProductById(id);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateMarketService = async (product, id) => {
  try {
    const oldProduct = await findProductById(id);

    const newProduct = {
      ...oldProduct[0],
      ...product,
    };

    const result = await updateProductById(newProduct, id);

    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};



export const deleteMarketService = async (id) => {
  try {
    const product = await findProductById(id);

    if(product.length ===0){
      return {
        error:true,
        message:"PRODUCT not found"
      }
    }

    await deleteProductById()
  } catch (error) {
    throw new Error(error.message);
  }
};
