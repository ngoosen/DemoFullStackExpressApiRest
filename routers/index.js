import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const router = express.Router();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const routeDir = path.join(__dirname);

const chargerRoutes = async () => {
    try {
        const fichiers = fs
            .readdirSync(routeDir)
            .filter((file) => file.endsWith(".js") && file !== "index.js");

        for (const file of fichiers) {
            const modulePath = pathToFileURL(path.join(routeDir, file));
            const routeModule = await import(modulePath);

            if (routeModule.default) {
                router.use("/api", routeModule.default);
                console.log(`✅ Route chargée : ${file}`);
            }
        }
    } catch (error) {
        console.error("❌ Erreur lors du chargement des routes :", error);
    }
};

await chargerRoutes();
export default router;
