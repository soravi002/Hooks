// MovieList.js
import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  // Divisez la liste de films en sous-listes de 3 films
  const chunkedMovies = [];
  for (let i = 0; i < movies.length; i += 3) {
    chunkedMovies.push(movies.slice(i, i + 3));
  }

  return (
    <div className="movie-list">
      {chunkedMovies.map((row, rowIndex) => (
        <div key={rowIndex} className="movie-row">
          {row.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MovieList;
