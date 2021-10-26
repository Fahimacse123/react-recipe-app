import React, { useEffect, useState } from "react";
import Recipe from './components/Recipe';
import "./App.css";
import Footer from './components/Footer';
import Header from './components/Header'
const App = () => {
  const APP_ID = "d113dfd7";
  const APP_KEY = "a419de6a4769cc5bde096a63176424ad";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);



  const getRecipes = async () => {
    const res = await fetch(`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`); //using another website for CORS 

    const data = await res.json();
    setRecipes(data.hits);
    console.log(data.hits)
  };


  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };


  return (
    <div>
      <Header />
    
    <div className="App">
      
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          search
        </button>

      </form>


      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            tittle={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
      <Footer />
    </div>
    </div>
  );

};
export default App;
