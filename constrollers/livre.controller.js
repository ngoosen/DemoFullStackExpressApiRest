import * as livreService from "../services/livre.service.js";

// getAll
export const getAll = async (req, res) => {
    const livres = await livreService.getAll();
    res.status(200).json({ livres });
};
