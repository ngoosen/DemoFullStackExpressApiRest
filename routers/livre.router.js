import express from "express";
import * as livreController from "../constrollers/livre.controller.js";

const router = express.Router();

router.get("/livres", livreController.getAll);
//
//
//

export default router;
