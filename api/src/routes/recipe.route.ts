// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service.js";
import Recipe from "../models/recipe.js";
// Global Config
export const recipeRouter = express.Router();

recipeRouter.use(express.json());
// GET (LIST)
recipeRouter.get("/", async (_req: Request, res: Response) => {
    try {
       const recipe = (await collections.recipe.find({}).toArray()) as Recipe[];

        res.status(200).send(recipe);
    } catch (error) {
        res.status(500).send(error.message);
    }
});
// POST

// PUT

// DELETE