import React, { useState, useEffect } from "react";
import CardItem from "./components/CardItem";
import { pokemons } from "./mock/mockedData";

import "./styles.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const onSearchChange = (event) => {
    const { value } = event.target;
    setSearch(value.trim());
  };

  useEffect(() => {
    const results = [];
    for (const pokemon of pokemons) {
      var regex = new RegExp(search, "gim");
      if (pokemon.name.match(regex)) {
        results.push(<CardItem {...pokemon} />);
      }
    }
    setFiltered(results);
  }, [search]);

  useEffect(() => {
    const results = [];
    for (const pokemon of pokemons) {
      results.push(<CardItem {...pokemon} />);
    }
    setFiltered(results);
  }, []);

  return (
    <div className="app">
      <h2>Mini Challenge 3: Poke filter</h2>
      <input
        type="text"
        name="search"
        onChange={onSearchChange}
        value={search}
      />
      <div className="cards">{filtered}</div>
    </div>
  );
}
