import express from "express";
import db from "./models/index.js";
import routes from "./routers/index.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(routes);

const start = async () => {
    try {
        await db.sequelize.authenticate();
        console.log("✅ Connexion à la base de données réussie !!!");

        await db.sequelize.sync({ alter: true });
        console.log("✅ Modèles synchronisés avec succès !!!");

        app.listen(port, () =>
            console.log(`🚀 Serveur démarré : http://localhost:${port}`)
        );
    } catch (error) {
        console.error(`❌ Erreur au démarrage : ${error}`);
    }
};

start();
