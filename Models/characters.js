import { pool } from "../db/index.js";
 
export async function fetchAllCharacters() {
    const characters = await pool.query("SELECT * FROM characters");
    console.log(characters)
    return characters.rows;
}