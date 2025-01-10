import express from "express";
import {
  getCharacters,
  getCharacterById,
  //createAuthor,
 // updateAuthorById,
  //deleteAuthorById,
} from "../controllers/characters.js";

const router = express.Router();

router.get("/", getCharacters);
router.get("/:id", getCharacterById);
//router.post("/", createAuthor);
//router.patch("/:id", updateAuthorById);
//router.delete("/:id", deleteAuthorById);

export default router;
