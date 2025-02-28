import * as livreRepository from "../repositories/livre.repository.js";

// getAll
export const getAll = async () => {
    const livres = await livreRepository.getAll();
    return livres.length ? livres : "Aucun livre existant actuellement...";
};
