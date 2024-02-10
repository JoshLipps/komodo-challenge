// src/index.ts
import express from "express";
import { connectToDatabase } from "./services/database.service.js";
import { recipeRouter } from "./routes/recipe.route.js";
import { curationRouter } from "./routes/curation.route.js";

async function main() {
  try {
    await connectToDatabase();
  } catch (error) {
    console.error(`[server]: Failed to connect to database: ${error.message}`);
    return;
  }
  const app = express();

  app.use("/recipe", recipeRouter);
  app.use("/curation", curationRouter);

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });

}

main();
