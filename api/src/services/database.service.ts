// External Dependencies
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import Recipe from "../models/recipe.js";
import Curation from "../models/curation.js";


// Global Variables
export const collections: {
  recipe?: mongoDB.Collection<Recipe>
  curation?: mongoDB.Collection<Curation>
} = {}

// Initialize Connection
export async function connectToDatabase() {
  dotenv.config();
  const {
    DB_CONN_STRING,
    DB_NAME,
    RECIPE_COLLECTION_NAME,
    CURATION_COLLECTION_NAME
  } = process.env;
  console.log('DB_CONN_STRING', DB_CONN_STRING);
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(DB_CONN_STRING);

  await client.connect();

  const db: mongoDB.Db = client.db(DB_NAME);

  const recipeCollection = db.collection<Recipe>(RECIPE_COLLECTION_NAME);

  collections.recipe = recipeCollection;

  const curationCollection = db.collection<Curation>(CURATION_COLLECTION_NAME);

  collections.curation = curationCollection;

  console.log(`Successfully connected to database: ${db.databaseName}`);
}