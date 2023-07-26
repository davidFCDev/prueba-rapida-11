function ListOfMovies({ movies }) {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li className="movie" key={movie.imdbID}>
          <h2>{movie.Title}</h2>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title} />
        </li>
      ))}
    </ul>
  );
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;

  return (
    <div>
      {hasMovies ? <ListOfMovies movies={movies} /> : <p>No movies results</p>}
    </div>
  );
}

export default Movies;
