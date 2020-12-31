import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [recipe, setRecipe] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(recipe);
    setRecipe('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label className="form-label">Search for a Recipe</label>
          <input
            className="form-control"
            type="text"
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)}
          />
          <button className="btn btn-primary">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
