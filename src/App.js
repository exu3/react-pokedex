import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import { useEffect, useState, useMemo } from "react";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [text, setText] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0")
      .then((res) => res.json())
      .then((data) => {
        const results = data.results.map((pokemon, idx) => {
          return { ...pokemon, idx: idx + 1 };
        });
        setPokemon({ ...data, results });
      });
  });

  useMemo(() => {
    if (text.length === 0) {
      setFilteredPokemon([]);
      return;
    }
    setFilteredPokemon(() =>
      pokemon.results?.filter((pokemon) => pokemon.name.includes(text))
    );
  }, [pokemon.results, text]);
  return (
    <Router>
      <div className="App">
        <div className="flex flex-col justify-center pt-14">
          <Link to="/">
            <header className="text-4xl text-yellow-700">Pokedex</header>
          </Link>
        </div>
      </div>
      <Switch>
        <Route path="/about/:slug">
          <About></About>
        </Route>
        <Route path="/">
          <div className="w-full flex justify-center">
            <input
              type="text"
              onChange={($event) => setText($event.target.value)}
              placeholder="Search pokemon"
              className="mt-10 border-blue-500 border-2 rounded-xl"
            />
          </div>
          {pokemon && <Home pokemon={filteredPokemon} />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
