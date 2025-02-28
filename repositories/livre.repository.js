import db from "../models/index.js";
const { Livre } = db;

// CRUD

// GetAll
export const getAll = async () => {
	return await Livre.findAll();
}

// // get one
export const getOneById = async (id) => {
	return await Livre.findByPk(id);
}

// // Create
export const create = async (livre) => {
	return await Livre.create(livre);
}

// // Update
export const update = async (id, data) => {
	let livre = await Livre.findByPk(id);
	livre.set({
		titre: data.titre,
		auteur: data.auteur,
		annee: data.annee,
	})

	return await livre.save();
};


// // Delete
export const deleteById = async (id) => {
	let livre = await Livre.findByPk(id);
	return await livre.destroy();
};
