import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
const Home = () => {
  return (
    <div>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <Button variant="outlined" xs={6}>
            <Link to="/pantry">Add Ingredients to Your Pantry</Link>
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" xs={6}>
            <Link to="/searchByDish">Search by Dish</Link>
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" xs={6}>
            <Link to="/searchByIngredients">Search by Ingredients</Link>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
