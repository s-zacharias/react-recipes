import React from 'react';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';

const SearchBar = ({ onFormSubmit, dish, setDish }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(dish);
    setDish('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <FormControl>
          <InputLabel>Search by the Dish</InputLabel>
          <Input value={dish} onChange={(e) => setDish(e.target.value)} />
          <Button type="submit">Search</Button>
        </FormControl>
      </form>
    </div>
  );
};

export default SearchBar;
