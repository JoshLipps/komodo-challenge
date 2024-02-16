import React, { FC, useEffect, useState } from 'react';
import { Recipe } from './recipes';
export interface Curation {
  Name: string,
  Description: string,
  // recipe_IDs: (ObjectId|string)[],
  _id?: string,
  Recipes?: Recipe[]
}


const Curations: FC = () => {
  const [curations, setCurations] = useState<Curation[]>([]);

  const fetchCurations = async () => {
    const response = await fetch('/api/curation');
    const data = await response.json();
    setCurations(data);
  };
  useEffect(() => {
    fetchCurations();
  }, [])

  return (
    <div>
      <h1>Curations</h1>
      {
        curations.map((curation, index) => (
          <div key={index}>
            <h2>{curation.Name}</h2>
            <p>{curation.Description}</p>
            {
              curation.Recipes?.map((recipe, index) => (
                <div key={index}>
                  <h3>{recipe.Name}</h3>
                </div>
              ))
            }
          </div>
        ))
      }
    </div>
  );
};

export default Curations;