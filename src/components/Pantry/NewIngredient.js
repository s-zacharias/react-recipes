import React, { useState } from 'react';

const NewIngredient = ({ onFormSubmit }) => {
  const [ingredient, setIngredient] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(ingredient);
    setIngredient('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default NewIngredient;
