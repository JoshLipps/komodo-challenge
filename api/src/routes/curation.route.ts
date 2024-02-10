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
       const curation = (await collections.curation.find({}).toArray()) as Curation[];
        res.status(200).send(curation);
    } catch (error) {
        res.status(500).send(error.message);
    }
});
// POST

// PUT

// DELETE