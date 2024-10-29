import { pool } from "../databases/index.js";



export const createCategoryTable = async ()=>{
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS category (
        id SERIAL PRIMARY KEY,
        name VARCHAR,
        description TEXT
      )  
      `)
  } catch (error) {
    throw new Error(error.message)
  }
}