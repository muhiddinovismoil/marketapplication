import dotenv from "dotenv"
dotenv.config()


export const config = {
  app:{
    PORT:process.env.PORT
  },
  db:{
    user:process.env.DB_USER,
    name:process.env.DB_NAME,
    port:process.env.DB_PORT,
    password:process.env.DB_PASSWORD,
    host:process.env.DB_HOST
  }
}