import React from 'react';
import NewIngredient from './NewIngredient';
import CurrentList from './CurrentList';

const Pantry = ({ ingredients, setIngredients }) => {
  const onFormSubmit = (ingredient) => {
    setIngredients([...ingredients, ingredient]);
  };
  return (
    <div>
      <NewIngredient onFormSubmit={onFormSubmit} />
      <CurrentList ingredients={ingredients} setIngredients={setIngredients} />
    </div>
  );
};

export default Pantry;
