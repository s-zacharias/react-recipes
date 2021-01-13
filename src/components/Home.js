import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
const Home = () => {
  return (
    <div>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}
        style={{ minHeight: '100vh' }}
      >
        <Grid item style={{ textAlign: 'center' }}>
          <Typography variant="h3">Welcome to Recipe Finder!</Typography>
          <Typography variant="h6">
            Feel free to search for recipes in two different ways! If you have
            specific ingredients you would like to use, add them to you pantry
            before clicking search by ingredients. In order to search for a
            specific dish, go ahead and click search by dish and use the search
            bar. If you find a recipe you like, click the heart icon to add it
            to your saved recipes list.
          </Typography>
        </Grid>
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
        <Grid item>
          <Button variant="outlined" xs={6}>
            <Link to="/saved">View Saved Recipes</Link>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
