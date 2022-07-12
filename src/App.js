import React from "react";
import Home from "./components/Home/Home";
import Favorites from "./components/Favorites/Favorites";
import Buscador from "./components/Buscador/Buscador";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import Movie from "./components/Movie/Movie";

function App() {
  return (
      <React.Fragment>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/favs" element={<Favorites/>} />
            <Route path="/search" element={<Buscador/>} />
            <Route path="/movie/:id" element={<Movie/>} />
          </Routes>
      </React.Fragment>
  );
}

export default App;
