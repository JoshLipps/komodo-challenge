import React, { FC, useCallback, useEffect, useState } from 'react';
import { Curation } from './curations';

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

  const addRecipeToCuration = useCallback(async (recipe: Recipe, curation: Curation) => {
    //TODO: better error handling and handle empty curation
    try {
      if(!curation._id && recipe._id) {
        const response = await fetch('/api/curation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...curation,
            Recipe_IDS: [recipe._id],
          }),
        });

        if(response.ok) {
          const data = await response.json();
          curation._id = data._id;
        } else {
          //TODO: better error handling
          throw new Error('Failed to create curation');
        }
      } else if (curation._id && recipe._id) {
        const response = await fetch(`/api/curation/${curation._id}/recipe/${recipe._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            Curation_ID: curation._id,
          }),
        });
        if(response.ok) {
          const data = await response.json();
          curation._id = data._id;
        } else {
          //TODO: better error handling
          console.error('Failed to add recipe to existing curation.', response.status, response);
          throw new Error('Failed to add recipe to existing curation.');
        }
      } else {
        console.error('No recipe ID found to add to curation.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }, []);

  const addToList = useCallback(async (recipe: Recipe, name = 'My List', description = 'My list of Recipes') => {
    const curation = {
      Name: name,
      Description: description,
      // _id: '60b8f4e3c0d5b2b2e8c6f9c3',
    };
    await addRecipeToCuration(recipe!, curation);
  },[addRecipeToCuration]);;

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
            <button onClick={() => addToList(recipe)}>Add to List</button>
          </div>
        ))
      }
    </div>
  );
};

export default Recipes;