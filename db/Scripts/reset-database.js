import { pool } from "../index.js";

async function resetDatabase() {
  try {
    // Drop existing tables if they exist (remember to re-enter DROP TABLE on 2nd table)
    await pool.query(`
      DROP TABLE IF EXISTS characters CASCADE;
    `);

    // Create the characters table with a foreign key to the personas table
    await pool.query(`
      CREATE TABLE characters (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        character_name VARCHAR(255) NOT NULL,
        pseudoname VARCHAR(255) NOT NULL,
        main_persona VARCHAR(255) NOT NULL
      );
    `);

    // Seed the characters table
    await pool.query(`
      INSERT INTO characters (character_name, pseudoname, main_persona)
      VALUES 
        ('Ren Amamiya', 'Joker', 'Arsene'),
        ('Morgana', 'Mona', 'Zorro'),
        ('Ryuji Sakamoto', 'Skull', 'Captain Kid'),
        ('Ann Takamaki', 'Panther', 'Carmen'),
        ('Yusuke Kitagawa', 'Fox', 'Goemon'),
        ('Makoto Nijima', 'Queen', 'Johanna'),
        ('Futaba Sakura', 'Oracle', 'Necronomicon'),
        ('Haru Okumura', 'Noir', 'Milady'),
        ('Goro Akechi', 'Crow', 'Robin Hood');
    `);

    console.log("Database reset successful");
  } catch (error) {
    console.error("Database reset failed: ", error);
  } finally {
    // End the pool
    await pool.end();
  }
}

await resetDatabase();