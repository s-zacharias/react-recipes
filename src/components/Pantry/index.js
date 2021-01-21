import React from 'react';
import NewIngredient from './NewIngredient';
import CurrentList from './CurrentList';
import { Grid, Typography } from '@material-ui/core';

const Pantry = ({ ingredients, setIngredients }) => {
  const onFormSubmit = (ingredient) => {
    setIngredients([...ingredients, ingredient]);
  };
  return (
    <div>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <Typography variant="h5">Add Ingredients to Your Pantry</Typography>
        </Grid>
        <Grid item>
          <NewIngredient onFormSubmit={onFormSubmit} />
        </Grid>
        <Grid item>
          <CurrentList
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Pantry;
