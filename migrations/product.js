import { pool } from "../databases/index.js";



export const createProductTable = async ()=>{
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS product (
        id SERIAL PRIMARY KEY,
        name VARCHAR,
        create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        quantity INT,
        price REAL,
        market_id INT REFERENCES market(id) ON DELETE CASCADE,
        category_id INT REFERENCES category(id) ON DELETE CASCADE
      )  
      `)
  } catch (error) {
    throw new Error(error.message)
  }
}