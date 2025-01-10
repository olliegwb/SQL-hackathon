import express from "express";
import {
  getCharacters,
  //getAuthorById,
  //createAuthor,
 // updateAuthorById,
  //deleteAuthorById,
} from "../controllers/characters.js";

const router = express.Router();

router.get("/", getCharacters);
//router.get("/:id", getAuthorById);
//router.post("/", createAuthor);
//router.patch("/:id", updateAuthorById);
//router.delete("/:id", deleteAuthorById);

export default router;
