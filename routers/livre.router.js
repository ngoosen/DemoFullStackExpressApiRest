import express from "express";
import * as livreController from "../constrollers/livre.controller.js";

const router = express.Router();

router.get("/livres", livreController.getAll);
router.get("/livres/:id", livreController.getOneById);
router.post("/livres", livreController.create);
//
//
//

export default router;
