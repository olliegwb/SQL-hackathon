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

export async function insertCharacter(character_name, pseudoname, main_persona) {
    const newCharacter = await pool.query("INSERT INTO characters (character_name, pseudoname, main_persona) VALUES ($1,$2,$3) RETURNING *", [character_name, pseudoname, main_persona]
    );
    return newCharacter.rows[0]; 

}
