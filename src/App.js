import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filtre from './components/Filter';
import NewMovieForm from './components/newmovies';

const App = () => {
  const [movies, setMovies] = useState([
    { title: 'Ezékiel et les septs nains', description: 'Il les a réduit en esclavage et les maltraite très souvent.', posterURL: 'https://i.pinimg.com/564x/3c/43/65/3c43652259e75b1e2c64426d1c03ce05.jpg', note: 8 },
    { title: 'Ezékiel aux bois dormants', description: 'Il a trop abusé des somnifères parcequ il voulait dormir après avoir coder jusqu à 3h du mat.', posterURL: 'https://i.pinimg.com/236x/b4/f5/a2/b4f5a2f4d323713c3f8b2e687be07492.jpg', note: 7 },
    { title: 'La belle et Ezékiel', description: 'Toi meme tu sais comment ca se passe dans le disney 🧘🏽', posterURL: 'https://i.pinimg.com/564x/d4/b2/bb/d4b2bb082b676e5d4ec4f6ce2f41491a.jpg', note: 10 },
    { title: 'Ezekiel des neiges', description: 'Libéré, Délivré... Je vais tous vous congeler !', posterURL: 'https://i.pinimg.com/236x/61/a2/46/61a2465e660ad8f12bb5fcdcd73945d5.jpg', note: '9' },
    { title: 'Shrezékiel', description: 'Il est devenu tout vert, je crois il est malade.', posterURL: 'https://i.pinimg.com/236x/75/91/00/759100161a1056e5c890cf3d767ce8c4.jpg', note: '8' },
    { title: 'Cendrizekiel', description: 'Poursuivit par la princesse avec lui avoir jeter ses airs forces en verre en pleine cérémonie. Le headshot était parfait.', posterURL: 'https://i.pinimg.com/236x/97/0d/9a/970d9a4f7f6cf11b299c9ace124c6aa5.jpg', note: '6' },
    { title: 'Ezéponse', description: 'Il a les cheuveux plus longs que votre avenir.', posterURL: 'https://i.pinimg.com/474x/7b/3e/8f/7b3e8f8ad229c26c825598af8f6fd21e.jpg', note: '10' },
    { title: 'Ezédin', description: ' Miskine il a jamais réussi à trouver la lampe magique pour faire sortir le génie, avoir 3 voeux et choper la princesse arabe.', posterURL: 'https://i.pinimg.com/236x/2f/8c/36/2f8c36ac1d77e81ea75516b8df753c8b.jpg', note: '9' },
    { title: 'Le roi Ezékiel', description: 'Les sorciers béninois ont trasformé ce jeune homme en lionceau du nom de Simba.', posterURL: 'https://i.pinimg.com/564x/33/11/38/33113835ea347f2ec66630150645f2c0.jpg', note: '10' },
    { title: 'Life as a Developper', description: 'Ca ne fait que commencer ! 😉', posterURL: 'https://i.pinimg.com/236x/9f/3d/7e/9f3d7e2b9cc5eb3504c062f567617267.jpg', note: '10' },  
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleFilter = (title) => {
    setTitleFilter(title);
    filterMovies(title, ratingFilter);
  };

  const handleRatingFilter = (rating) => {
    setRatingFilter(rating);
    filterMovies(titleFilter, rating);
  };

  const filterMovies = (title, rating) => {
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        (rating === '' || movie.note == parseFloat(rating))
    );
    setFilteredMovies(filtered);
  };

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie], () => {
      filterMovies(titleFilter, ratingFilter, [...movies, newMovie]);
    });
  };

  return (
    <div className="App">
      <h1 style={{ color: 'DarkRed', fontSize: '4rem', textAlign: 'center' }}>Hessflix</h1>
      <Filtre handleFilter={handleFilter} handleRatingFilter={handleRatingFilter} />
      {filteredMovies.length > 0 ? (
        <MovieList movies={filteredMovies} />
      ) : (
        <p>Aucun film ne correspond aux critères de filtre. Prend toi un abonement netflix mdr.</p>
      )}
      <NewMovieForm handleAddMovie={handleAddMovie} />
    </div>
  );
};

export default App;
