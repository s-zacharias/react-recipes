// import { useState, useEffect } from 'react';
// import spoontacular from '../apis/spoontacular';

// const useRecipeData = (type, query) => {
//   const [recipeData, setRecipeData] = useState(null);

//   useEffect(() => {
//     fetchRecipeData(type, query);
//   }, [type, query]);

//   const fetchRecipeData = async (type, query) => {
//     let response;
//     if (type === 'ingredients') {
//       response = await spoontacular.get('/recipes/findByIngredients', {
//         params: {
//           ingredients: query,
//           number: 20,
//           ranking: 1,
//           ignorePantry: true,
//         },
//       });
//       let stringOfIds = '';

//       response.data.forEach((el, index) => {
//         if (index === response.data.length - 1) {
//           stringOfIds += `${el.id}`;
//         } else {
//           stringOfIds += `${el.id},`;
//         }
//       });

//       const response2 = await spoontacular.get('/recipes/informationBulk', {
//         params: {
//           ids: stringOfIds,
//         },
//       });
//       setRecipeData(response2.data);
//     } else if (type === 'dish') {
//       response = await spoontacular.get('/recipes/complexSearch', {
//         params: {
//           query: query,
//           number: 20,
//         },
//       });
//       console.log(response);
//       let stringOfIds = '';

//       response.data.forEach((el, index) => {
//         if (index === response.data.length - 1) {
//           stringOfIds += `${el.id}`;
//         } else {
//           stringOfIds += `${el.id},`;
//         }
//       });

//       const response2 = await spoontacular.get('/recipes/informationBulk', {
//         params: {
//           ids: stringOfIds,
//         },
//       });
//       setRecipeData(response2.data);
//     }

//     return [recipeData, fetchRecipeData];
//   };
// };
// export default useRecipeData;
