import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import styled from 'styled-components';
import Recipes from './routes/recipes';
import Curations from './routes/curations';

const Container = styled.div`
  /* background-color: hsla(220, 4.2%, 13.9%, 1.000); */
  /* background-image: linear-gradient(180.00deg, hsla(220, 4.2%, 13.9%, 1.000) 0%, hsla(220, 4.9%, 12%, 1.000) 100%); */
`

const router = createBrowserRouter([
  {
    path: "/",
    element: <Recipes />,
  },
  {
    path: "/curations",
    element: <Curations />,
  },
]);

function App() {

  return (
    <Container>
      <nav>
        <ul>
          <li>
            <a href={`/`}>My Favorites Recipes</a>
          </li>
          <li>
            <a href={`/curations`}>My Lists</a>
          </li>
        </ul>
      </nav>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
