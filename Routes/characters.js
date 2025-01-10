import express from "express";
import {
  getCharacters,
  getCharacterById,
  createCharacter,
 // updateAuthorById,
  //deleteAuthorById,
} from "../controllers/characters.js";

const router = express.Router();

router.get("/", getCharacters);
router.get("/:id", getCharacterById);
router.post("/", createCharacter);
//router.patch("/:id", updateAuthorById);
//router.delete("/:id", deleteAuthorById);

export default router;
