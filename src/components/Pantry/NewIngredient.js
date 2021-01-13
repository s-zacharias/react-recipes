import React, { useState } from 'react';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';

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
        <FormControl>
          <InputLabel>Add to Your Pantry</InputLabel>
          <Input
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
          />
          <Button type="submit">Add</Button>
        </FormControl>
      </form>
    </div>
  );
};

export default NewIngredient;
