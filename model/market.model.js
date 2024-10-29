import { pool } from "../databases/index.js";

export const createMarketModel = async (market) => {
  try {
    const result = await pool.query(
      `
    INSERT INTO market (
      name,
      location
    ) VALUES (
      $1,
      $2
    ) RETURNING *
`,
      [market.name, market.location]
    );

    return result.rows;
  } catch (error) {
      throw new Error(error);
  }
};

export const findMarketById = async (id) => {
  try {
    const result = await pool.query(
      `
   SELECT * FROM market 
      WHERE id = $1;
`,
      [id]
    );

    return result.rows;
  } catch (error) {
    throw new Error(error);
  }
};


export const updateMarketById= async (market, id) => {
  try {
    const result = await pool.query(
      `
   UPDATE market
   SET 
    name = $1, 
    location = $2
  WHERE id = $3;
  `,
      [market.name, market.location, id]
    );

    return result.rows;
  } catch (error) {
    throw new Error(error);
  }
};


export const deleteMarketById= async (id) => {
  try {
    const result = await pool.query(
      `
   DELETE  FROM market
    WHERE id = $1;
  `,
      [id]
    );

    return result.rows;
  } catch (error) {
    throw new Error(error);
  }
};