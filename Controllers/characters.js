import {
    fetchAllCharacters,
    fetchCharacterById,
    //insertAuthor,
   // modifyAuthorById,
    //removeAuthorById,
  } from "../models/characters.js";


  export async function getCharacters(req, res) {
    try {
      const characters = await fetchAllCharacters();
      console.log("working");
      console.log(characters)
      res.status(200).json({ status: "success", data: characters });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }

  export async function getCharacterById(req, res) {
    try {
      const id = req.params.id;
      const character = await fetchCharacterById(id);
      if (!character) {
        return res
          .status(404)
          .json({ status: "fail", message: "Character not found" });
      }
      res.status(200).json({ status: "success", data: character });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }