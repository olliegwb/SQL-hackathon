import { pool } from "../index.js";

async function resetDatabase() {
  try {
    // Drop existing tables if they exist
    await pool.query(`
      DROP TABLE IF EXISTS characters CASCADE;
      DROP TABLE IF EXISTS personas CASCADE;
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

    // Create the personas table
    await pool.query(`
        CREATE TABLE personas (
          id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
          persona VARCHAR(255) NOT NULL,
          strengths VARCHAR(255) ARRAY,
          weaknesses VARCHAR(255) ARRAY
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

    // Seed the personas table
    await pool.query(`
        INSERT INTO personas (persona, strengths, weaknesses)
        VALUES 
          ('Arsene', '{"Curse"}', '{"Ice", "Bless"}'),
          ('Zorro', '{"Wind"}', '{"Electricity"}'),
          ('Captain Kid', '{"Electricity"}', '{"Wind"}'),
          ('Carmen', '{"Fire"}', '{"Ice"}'),
          ('Goemon', '{"Ice"}', '{"Fire"}'),
          ('Johanna', '{"Curse", "Nuclear"}', '{"Psy"}'),
          ('Necronomicon', '{"Almighty"}', '{null}'),
          ('Milady', '{"Psy"}', '{"Nuclear"}'),
          ('Robin Hood', '{"Bless"}', '{"Curse"}'),
          ('Jack Frost', '{"Ice"}', '{"Fire"}'),
          ('Pixie', '{"Electricity", "Bless"}', '{"Gun", "Ice", "Curse"}'),
          ('Izanami', '{"Curse", "Electricity"}', '{"Wind"}'),
          ('Trumpeter', '{"Electricity", "Bless", "Ice", "Curse"}', '{null}'),
          ('Angel', '{"Bless", "Electricity"}', '{"Gun", "Curse"}');
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