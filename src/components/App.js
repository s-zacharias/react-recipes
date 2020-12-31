import React, { useState } from 'react';
import Pantry from './Pantry';
import FetchRecipes from './Recipes/FetchRecipes';

const App = () => {
  const [ingredients, setIngredients] = useState([]);
  return (
    <div>
      <h1>App</h1>
      <Pantry ingredients={ingredients} setIngredients={setIngredients} />
      <FetchRecipes ingredients={ingredients} />
    </div>
  );
};

export default App;
