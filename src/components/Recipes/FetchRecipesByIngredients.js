import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Grid from '@material-ui/core/Grid';
import spoontacular from '../../apis/spoontacular';
import RecipeCard from './RecipeCard';
import Pantry from '../Pantry';
import { Typography } from '@material-ui/core';

const FetchRecipesByIngredients = ({
  ingredients,
  setIngredients,
  saved,
  setSaved,
}) => {
  const [recipeList, setRecipeList] = useState([]);
  let ingredientString = '';
  ingredients.forEach((ingredient, index) => {
    if (index === ingredients.length - 1) {
      ingredientString += `${ingredient}`;
    } else {
      ingredientString += `${ingredient},`;
    }
  });

  useEffect(() => {
    if (ingredientString.length > 0) {
      fetchRecipeList(ingredientString);
    }
  }, [ingredientString]);

  const fetchRecipeList = async (items) => {
    const response = await spoontacular.get('/recipes/findByIngredients', {
      params: {
        ingredients: items,
        number: 5,
        ranking: 1,
        ignorePantry: true,
      },
    });

    let stringOfIds = '';

    response.data.forEach((el, index) => {
      if (index === response.data.length - 1) {
        stringOfIds += `${el.id}`;
      } else {
        stringOfIds += `${el.id},`;
      }
    });

    const response2 = await spoontacular.get('/recipes/informationBulk', {
      params: {
        ids: stringOfIds,
      },
    });
    setRecipeList(response2.data);
  };

  const renderRecipeList = recipeList.map((recipe) => {
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

  if (ingredients.length === 0) {
    return (
      <div>
        <Grid container direction="row" alignItems="space-center">
          <Grid item>
            <Pantry ingredients={ingredients} setIngredients={setIngredients} />
          </Grid>
          <Grid item>
            <Typography variant="h3">
              Add some ingredients to your pantry first!
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return (
      <div>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <Pantry ingredients={ingredients} setIngredients={setIngredients} />
          </Grid>
          <Grid item>
            <Grid container direction="column" alignItems="center" spacing={2}>
              <Grid item>
                <Typography variant="h5">
                  Recipe Results by Ingredients
                </Typography>
              </Grid>
            </Grid>
            <Grid container justify="center" spacing={2}>
              {renderRecipeList}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default FetchRecipesByIngredients;
