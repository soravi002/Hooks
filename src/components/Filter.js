import React from 'react';

const Filtre = ({ handleFilter, handleRatingFilter }) => {
  return (
    <div className="filter">
      <label>Titre:</label>
      <input type="text" onChange={(e) => handleFilter(e.target.value)} />
      <label>Note:</label>
      <input type="number" min="1" max="10" onChange={(e) => handleRatingFilter(e.target.value)} />
    </div>
  );
};

export default Filtre;
