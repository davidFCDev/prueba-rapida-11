import "./App.css";
import withResults from "./mocks/with-results.json";

function App() {
  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form>
          <input type="text" placeholder="Avengers, matrix..." />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main></main>
    </div>
  );
}

export default App;
