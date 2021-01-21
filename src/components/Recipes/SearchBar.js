import React from 'react';
import { FormControl, Button, TextField } from '@material-ui/core';

const SearchBar = ({ onFormSubmit, dish, setDish }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(dish);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <FormControl fullWidth>
          <TextField
            label="Search by the Dish"
            value={dish}
            onChange={(e) => setDish(e.target.value)}
            style={{ width: 450 }}
          />
          <Button type="submit">Search</Button>
        </FormControl>
      </form>
    </div>
  );
};

export default SearchBar;
