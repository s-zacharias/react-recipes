import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Grid from '@material-ui/core/Grid';
import spoontacular from '../../apis/spoontacular';
import RecipeCard from './RecipeCard';
import { Typography } from '@material-ui/core';

const FetchRecipesByIngredients = ({ ingredients, saved, setSaved }) => {
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
    fetchRecipeList(ingredientString);
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
    console.log('response2: ', response2);
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

  return (
    <div>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <Typography variant="h3">Recipe Results by Ingredients</Typography>
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={2}>
        {renderRecipeList}
      </Grid>
    </div>
  );
};

export default FetchRecipesByIngredients;
