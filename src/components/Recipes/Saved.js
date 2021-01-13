import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import RecipeCard from './RecipeCard';

const Saved = ({ saved, setSaved }) => {
  if (saved.list.length > 0) {
    const renderSavedList = saved.list.map((recipe) => {
      return (
        <Grid item key={uuidv4()}>
          <RecipeCard
            index={recipe.title}
            recipe={recipe}
            saved={saved}
            setSaved={setSaved}
          />
        </Grid>
      );
    });
    return (
      <div>
        <Typography variant="h3">Saved Recipes</Typography>
        <Grid container justify="center" spacing={2}>
          {renderSavedList}
        </Grid>
      </div>
    );
  } else {
    console.log(saved);
    return (
      <div>
        <Typography variant="h3">Save Some Recipes!</Typography>
      </div>
    );
  }
};

export default Saved;
