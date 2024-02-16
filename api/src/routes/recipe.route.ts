// External Dependencies
import express, { Request, Response } from "express";
import { collections } from "../services/database.service.js";
import Recipe from "../models/recipe.js";

//@ts-ignore node and ts don't agree on the import
import recipes from "../data/recipes.json" assert { type: "json" };

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
// POST -  this endpoint is overloaded to just load all the recipes
recipeRouter.post("/", async (_req: Request, res: Response) => {
    try {
        for (const recipe of recipes) {
            await collections.recipe.insertOne(recipe);
        }
        res.status(200).send({
            message: "Successfully loaded all recipes"
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
});
// PUT

// DELETE