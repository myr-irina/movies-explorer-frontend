import React from "react";
import "./SearchForm.css";
import SearchIcon from "./../../images/searchIcon.svg";
import FilterCheckbox from "./../FilterCheckbox/FilterCheckbox";
import SearchButton from "./../../images/search-btn.svg";

export default function SearchForm({searchMovie, isLoading, filteredMovies, onFilterMovies}) {
const [searchTerm, setSearchTerm] = React.useState('');

function onChange(e) {
  setSearchTerm(e.target.value);
}

  function handleSubmit(e) {
    e.preventDefault();  
    searchMovie(searchTerm);
  }

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form"  onSubmit={handleSubmit}>
          <div className="search__input-block">
            <img className="search__icon" src={SearchIcon} alt="иконка поиска" />
            <input
              className="search__input"
              value={searchTerm}
              onChange={onChange}
              type="text"
              placeholder="Фильм"
              autoComplete="off"
              minLength="2"
              maxLength="200"
              required
            />
            <button className="search__button" type='submit'>
              <img className="search__icon-btn"src={SearchButton} alt="иконка кнопки поиска" />
            </button>
          </div>
          <FilterCheckbox filteredMovies={filteredMovies} onFilterMovies={onFilterMovies} />
        </form>
      </div>
    </section>
  );
}
