import "./App.css";
import Movies from "./components/Movies";
import withResults from "./mocks/with-results.json";

function App() {
  const movies = withResults.Search;

  const mappedMovies = movies.map((movie) => {
    return {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    };
  });

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form>
          <input type="text" placeholder="Avengers, matrix..." />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  );
}

export default App;
