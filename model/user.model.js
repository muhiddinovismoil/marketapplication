import { pool } from "../databases/index.js";

export const createUserModel = async (user) => {
  try {
    const result = await pool.query(
      `
    INSERT INTO users (
      email,
      password,
      full_name
    ) VALUES (
      $1,
      $2,
      $3 
    ) RETURNING *
`,
      [user.email, user.password, user.full_name]
    );

    return result.rows;
  } catch (error) {
    if (error.code == 23505) {
      return {
        error: true,
        message: "Email already exists!",
      };
    } else {
      throw new Error(error);
    }
  }
};

export const findUserByEmail = async (email) => {
  try {
    const result = await pool.query(
      `
   SELECT * FROM users 
      WHERE email = $1;
`,
      [email]
    );

    return result.rows;
  } catch (error) {
    throw new Error(error);
  }
};
