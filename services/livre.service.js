import * as livreRepository from "../repositories/livre.repository.js";

// getAll
export const getAll = async () => {
    const livres = await livreRepository.getAll();
    return livres.length ? livres : "Aucun livre existant actuellement...";
};

// Create
export const create = async (data) => {
    if (!data.titre || !data.auteur || !data.annee) {
        return "Tout les champs sont obligatoire";
    }
    return await livreRepository.create(data);
};

// getOne
export const getOneById = async (id) => {
    if (isNaN(id) || id < 1) {
        return "Id invalide";
    }

    const livre = await livreRepository.getOneById(id);
    return livre || "Livre inexistant...";
};