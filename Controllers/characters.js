import {
    fetchAllCharacters,
    //fetchAuthorById,
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