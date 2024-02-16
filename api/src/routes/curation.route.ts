// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service.js";
import Curation from "../models/curation.js";

// Global Config
export const curationRouter = express.Router();


curationRouter.use(express.json());
// GET (LIST)
curationRouter.get("/", async (_req: Request, res: Response) => {
  try {
    // const curation = (await collections.curation.find({}).toArray()) as Curation[];

    const curation = (await collections.curation.aggregate([
      {
        $lookup: {
          from: collections.recipe.collectionName,
          localField: "Recipe_IDs",
          foreignField: "_id",
          as: "Recipes"
        }
      }
    ]).toArray()) as Curation[];

    res.status(200).send(curation);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
// POST create a new curation allows for recipes to be added at the same time..... meh
curationRouter.post("/", async (req: Request, res: Response) => {
  try {
    const {
      Recipe_IDs = [],
      Name = '',
      Description = ''
    } = req.body;
    for (const id of Recipe_IDs){
      if(ObjectId.isValid(id) === false){
        throw new Error("Invalid recipe id");
      }
      try {
        const recipe = await collections.recipe.findOne({_id: new ObjectId(id)});
        if(!recipe){
          throw new Error("Recipe not found");
        }
      } catch (error) {
        throw new Error("Recipe lookup failed");
      }
    }
    const curation = new Curation(Name, Description, Recipe_IDs as string[]);

    const result = await collections.curation.insertOne(curation);
    res.status(200).send({...curation, id: result.insertedId});
  } catch (error) {
    res.status(500).send({
      message: error.message,
      status: 'error'
    });
  }
});
// PUT add recipe to curation
curationRouter.put("/:id/recipe/:recipe_id", async (req: Request, res: Response) => {
  try {
    const { id, recipe_id } = req.params;
    const curation = await collections.curation.findOne({_id: new ObjectId(id)});
    if(!curation){
      throw new Error("Curation not found");
    }
    const recipe = await collections.recipe.findOne({_id: new ObjectId(recipe_id)});
    if(!recipe){
      throw new Error("Recipe not found");
    }
    if(curation.Recipe_IDs.includes(recipe._id)){
      // throw new Error("Recipe already in curation");
      res.status(200).send({
        message: "Recipe already in curation"
      });
    } else {
      await collections.curation.updateOne({_id: new ObjectId(id)}, {
        $push: {
          Recipe_IDs: recipe._id
        }
      });
      res.status(200).send({
        message: "Successfully added recipe to curation"
      });
    }
    res.status(200).send(curation);
  } catch (error) {
    res.status(500).send({
      message: error.message,
      status: 'error'
    });
  }
});
// DELETE