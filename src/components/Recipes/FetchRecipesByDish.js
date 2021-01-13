import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { v4 as uuidv4 } from 'uuid';
import Grid from '@material-ui/core/Grid';
import spoontacular from '../../apis/spoontacular';
import RecipeCard from './RecipeCard';
import SearchBar from './SearchBar';

const FetchRecipesByDish = ({ saved, setSaved }) => {
  const [dish, setDish] = useState('soup');
  const [recipeList, setRecipeList] = useState([]);

  const onFormSubmit = (dish) => {
    setDish(dish);
  };

  useEffect(() => {
    fetchRecipeList(dish);
  }, [dish]);

  const fetchRecipeList = async (items) => {
    const response = await spoontacular.get('/recipes/complexSearch', {
      params: {
        query: items,
        number: 5,
      },
    });
    let stringOfIds = '';

    response.data.results.forEach((el, index) => {
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

  return (
    <div>
      <Typography variant="h3">Recipe Results by Dish</Typography>
      <SearchBar dish={dish} setDish={setDish} onFormSubmit={onFormSubmit} />
      <Grid container justify="center" spacing={2}>
        {renderRecipeList}
      </Grid>
    </div>
  );
};

export default FetchRecipesByDish;
