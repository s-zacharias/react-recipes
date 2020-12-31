import React, { useState, useEffect } from 'react';
import spoontactular from '../../apis/spoontacular';

const FetchRecipes = ({ ingredients }) => {
  const [recipeList, setRecipeList] = useState('');
  const [recipeListData, setRecipeListData] = useState([]);

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
    const response = await spoontactular.get('/recipes/findByIngredients', {
      params: {
        ingredients: items,
        number: 10,
        ranking: 2,
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
    setRecipeList(stringOfIds);
  };

  // useEffect(() => {
  //   fetchRecipeListData(recipeList);
  // }, [recipeList]);

  // const fetchRecipeListData = async (items) => {
  //   const response = await spoontactular.get('/recipes/informationBulk', {
  //     params: {
  //       ids: items,
  //     },
  //   });
  //   console.log(response);
  //   //setRecipeListData(response)
  // };

  return <div>Recipes</div>;
};

export default FetchRecipes;
