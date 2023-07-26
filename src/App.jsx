import "./App.css";
import Movies from "./components/Movies";
import withResults from "./mocks/with-results.json";

function App() {
  const movies = withResults.Search;

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
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
