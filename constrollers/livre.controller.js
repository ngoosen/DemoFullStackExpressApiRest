import * as livreService from "../services/livre.service.js";

// getAll
export const getAll = async (req, res) => {
    const livres = await livreService.getAll();
    res.status(200).json({ livres });
};

// getOneById
export const getOneById = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const livre = await livreService.getOneById(id);

        console.log("test");
        if (typeof livre === "string") {
            return res.status(400).json({ error: livre });
        }

        res.status(200).json(livre)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// create
export const create = async (req, res) => {
    try {
        const newLivre = await livreService.create(req.body);

        if (typeof newLivre === "string") {
            return res.status(400).json({ error: newLivre });
        }

        res.status(201).json(newLivre);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const livre = await livreService.update(id, req.body);

        if (typeof livre === "string") {
            return res.status(400).json({ error: livre, });
        }

        res.status(201).end();
    } catch (error) {
        res.status(400).json({ error: livre, });
    }
};

export const deleteById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const livre = await livreService.deleteById(id);

        if (typeof livre === "string") {
            return res.status(400).json({ error: livre, });
        }

        res.status(200).json({ message: "Livre supprimé.", });
    } catch (error) {
        res.status(400).json({ error: livre, });
    }
};
