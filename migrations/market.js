import { pool } from "../databases/index.js";



export const createMarketTable = async ()=>{
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS market (
        id SERIAL PRIMARY KEY,
        name VARCHAR,
        create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        location VARCHAR
      )  
      `)
  } catch (error) {
    throw new Error(error.message)
  }
}