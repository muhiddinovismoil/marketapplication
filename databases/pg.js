import pg from "pg";
import { config } from "../config/index.js";


const { db } = config;

export const pool = new pg.Pool({
  user: db.user,
  database: db.name,
  host: db.host,
  password: db.password,
  port: db.port,
});
