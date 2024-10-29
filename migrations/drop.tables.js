import { pool } from "../databases/index.js";


export const dropTables = async ()=>{
  try {
    await pool.query(`
          DROP TABLE users, product, market,category 
      `)
  } catch (error) {
    throw new Error(error.message)
  }
}