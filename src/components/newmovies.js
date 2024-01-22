import React, { useState } from 'react';

const NewMovieForm = ({ handleAddMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    note: 0,
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddMovie(newMovie);
    setNewMovie({
      title: '',
      description: '',
      posterURL: '',
      note: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input type="text" name="title" value={newMovie.title} onChange={handleChange} required />

      <label>Description:</label>
      <textarea name="description" value={newMovie.description} onChange={handleChange} required />

      <label>Poster URL:</label>
      <input type="url" name="posterURL" value={newMovie.posterURL} onChange={handleChange} required />

      <label>Note:</label>
      <input type="number" min="1" max="10" name="note" value={newMovie.note} onChange={handleChange} required />

      <button type="submit">Ajouter</button>
    </form>
  );
};

export default NewMovieForm;
