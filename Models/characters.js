import { pool } from "../db/index.js";
 
export async function fetchAllCharacters() {
    const characters = await pool.query("SELECT * FROM characters");
    console.log(characters)
    return characters.rows;
}
export async function fetchCharacterById(id) {
    const result = await pool.query("SELECT * FROM characters WHERE id = $1", [id]);
    return result.rows[0] || null; 
}
