import express from "express";
import * as livreController from "../constrollers/livre.controller.js";

const router = express.Router();

router.get("/livres", livreController.getAll);
router.get("/livres/:id", livreController.getOneById);
router.post("/livres", livreController.create);
router.put("/livres/:id", livreController.update);
router.delete("/livres/:id", livreController.deleteById);

export default router;
