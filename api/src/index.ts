// src/index.ts
import { connectToDatabase } from "./services/database.service.js";
import { recipeRouter } from "./routes/recipe.route.js";
import { curationRouter } from "./routes/curation.route.js";
import express, { Express } from "express";

const app: Express = express();

async function main() {
  try {
    await connectToDatabase();
  } catch (error) {
    console.error(`[server]: Failed to connect to database: ${error.message}`);
    return;
  }

  app.use("/recipe", recipeRouter);
  app.use("/curation", curationRouter);
  app.get("/", (_req, res)=>{
     res.send("Hello World");
  });

  const port = 5000;
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });

}

main();
