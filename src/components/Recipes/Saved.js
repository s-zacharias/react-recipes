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
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid item>
            <Typography variant="h4">Saved Recipes</Typography>
          </Grid>
        </Grid>
        <Grid container justify="center" spacing={2}>
          {renderSavedList}
        </Grid>
      </div>
    );
  } else {
    return (
      <div>
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          spacing={2}
        >
          <Grid item>
            <Typography variant="h4" style={{ textAlign: 'center' }}>
              Save Some Recipes First!
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default Saved;
