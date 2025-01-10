import {
  fetchAllPersonas,
  //fetchBookById,
  //insertBook,
  //modifyBookById,
  //removeBookById,
} from "../models/personas.js";


export async function getPersonas(req, res) {
    try {
      const personas = await fetchAllPersonas();
      res.status(200).json({ status: "success", data: personas });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }