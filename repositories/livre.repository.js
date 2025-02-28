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


// // Delete
