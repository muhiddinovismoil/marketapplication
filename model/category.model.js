import { pool } from "../databases/index.js";

export const createCategoryModel = async (category) => {
  try {
    const result = await pool.query(
      `
    INSERT INTO category (
      name,
      description
    ) VALUES (
      $1,
      $2
    ) RETURNING *
`,
      [category.name, category.description]
    );

    return result.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export const findCategoryById = async (id) => {
  try {
    const result = await pool.query(
      `
   SELECT * FROM category 
      WHERE id = $1;
`,
      [id]
    );

    return result.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateCategoryById = async (category, id) => {
  try {
    const result = await pool.query(
      `
   UPDATE category 
   SET 
    name = $1, 
    description = $2
  WHERE id = $3;
  `,
      [category.name, category.description, id]
    );

    return result.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteCategoryById = async (id) => {
  try {
    const result = await pool.query(
      `
   DELETE  FROM category 
    WHERE id = $1;
  `,
      [id]
    );

    return result.rows;
  } catch (error) {
    throw new Error(error);
  }
};
