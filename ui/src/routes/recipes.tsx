import React, { FC, useCallback, useEffect, useState } from 'react';

export interface Recipe {
  Name: string,
  url: string,
  Description: string,
  Author: string,
  Ingredients: string[],
  Method: string[],
  _id?: string
}
const Recipes: FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const fetchRecipes = useCallback(async () => {
    const response = await fetch('/api/recipe');
    const data = await response.json();
    setRecipes(data);
  }, []);

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  return (
    <div>
      <h1>Recipes</h1>
      {
        recipes.map((recipe, index) => (
          <div key={index}>
            <h2>{recipe.Name}</h2>
            <p>{recipe.Description}</p>
            <a href={recipe.url} target="_blank" rel="noreferrer">Link</a>
          </div>
        ))
      }
    </div>
  );
};

export default Recipes;