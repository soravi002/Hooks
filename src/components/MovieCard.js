import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <h2>{movie.title}</h2>
      <hr/>
      <h4>Description</h4>
      <p>{movie.description}</p>
      <button>Note: {movie.note}</button>
    </div>
  );
};
            
export default MovieCard;
