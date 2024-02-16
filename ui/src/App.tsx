import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import styled from 'styled-components';
import Recipes from './routes/recipes';
import Curations from './routes/curations';

const Container = styled.div`
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
