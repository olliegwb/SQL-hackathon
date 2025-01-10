import { pool } from "../db/index.js";
 
export async function fetchAllPersonas() {
    const personas = await pool.query("SELECT * FROM personas");
    console.log(personas)
    return personas.rows;
}