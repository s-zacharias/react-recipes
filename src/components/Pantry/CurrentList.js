import React from 'react';

const CurrentList = ({ ingredients, setIngredients }) => {
  const onDelete = (index) => {
    const newList = [];
    ingredients.forEach((ingredient, i) => {
      if (i !== index) {
        newList.push(ingredient);
      }
    });
    setIngredients(newList);
  };

  const renderList = ingredients.map((ingredient, index) => {
    return (
      <li key={index} index={index}>
        {ingredient}
        <button onClick={() => onDelete(index)}>x</button>
      </li>
    );
  });
  return <div>{renderList}</div>;
};

export default CurrentList;
