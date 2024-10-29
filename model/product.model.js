import { pool } from "../databases/index.js";

export const createProductModel = async (product) => {
  try {
    const result = await pool.query(
      `
    INSERT INTO product (
      name,
      quantity,
      price,
      market_id,
      category_id
    ) VALUES (
      $1,
      $2,
      $3,
      $4,
      $5
    ) RETURNING *
`,
      [
        product.name,
        product.quantity,
        product.price,
        product.market_id,
        product.category_id,
      ]
    );

    return result.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export const findProductById = async (id) => {
  try {
    const result = await pool.query(
      `
   SELECT * FROM product 
      WHERE id = $1;
`,
      [id]
    );

    return result.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateProductById = async (product, id) => {
  try {
    const result = await pool.query(
      `
      UPDATE product
        SET 
        name = $1,
        quantity =$2, 
        price = $3,
        market_id = $4,
        category_id = $5
      WHERE id = $6
        `,
      [
        product.name,
        product.quantity,
        product.price,
        product.market_id,
        product.category_id,
        id,
      ]
    );

    return result.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteProductById = async (id) => {
  try {
    const result = await pool.query(
      `
          DELETE FROM product  WHERE id = $1
        `,
      [id]
    );

    return result.rows;
  } catch (error) {
    throw new Error(error);
  }
};
