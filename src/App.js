import React, { useState } from "react";
import MovieList from "./MovieList";
import AddMovies from "./AddMovies";
import Filter from "./Filter";
import films from "./Movies";

function App() {
  const [movies, setMovies] = useState(films);
  const [filteredMovies, setFilteredMovies] = useState(films);

  const handleFilter = (filter) => {
    const filtered = films.filter((movie) => {
      const titleCondition = movie.title.toLowerCase().includes(filter.title.toLowerCase());
      const ratingCondition = filter.rating === "" || movie.rating >= parseFloat(filter.rating);
      return titleCondition && ratingCondition;
    });

    setFilteredMovies(filtered);
  };

  const handleAddMovie = (newFilm) => {
    setMovies([newFilm, ...movies]);
    // Update filteredMovies if needed
    handleFilter({ title: "", rating: "" });
  };

  return (
    <div className="App">
      <AddMovies handleclick={handleAddMovie} />
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;