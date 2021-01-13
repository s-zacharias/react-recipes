import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Pantry from './Pantry';
import NavBar from './NavBar';
import FetchRecipesByIngredients from './Recipes/FetchRecipesByIngredients';
import FetchRecipesByDish from './Recipes/FetchRecipesByDish';
import Saved from './Recipes/Saved';

const App = () => {
  const [ingredients, setIngredients] = useState([
    'spinach',
    'cheese',
    'milk',
    'pasta',
  ]);
  const [saved, setSaved] = useState({ ids: {}, list: [] });

  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/pantry">
            <Pantry ingredients={ingredients} setIngredients={setIngredients} />
          </Route>
          <Route path="/searchByIngredients" exact>
            <FetchRecipesByIngredients
              ingredients={ingredients}
              saved={saved}
              setSaved={setSaved}
            />
          </Route>
          <Route path="/searchByDish" exact>
            <FetchRecipesByDish saved={saved} setSaved={setSaved} />
          </Route>
          <Route path="/saved">
            <Saved saved={saved} setSaved={setSaved} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
