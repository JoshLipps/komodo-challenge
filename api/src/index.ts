// src/index.ts
import express, { Express, Request, Response, Router} from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(routes);
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/recipe", (req: Request, res: Response) => {
  res.send({
    recipes: []
  });
});

app.get("/curation", (req: Request, res: Response) => {
  res.send({
    curations: []
  });
});

app.post('/addRecipeToCuration', (req: Request, res: Response) => {
  res.send({
    curation_id: 0,
    recipe_id: 0
  });
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});