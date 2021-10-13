import React from "react";
import "./FilterCheckbox.css";

export default function FilterCheckbox({filteredMovies, onFilterMovies}) {

  function toggleCheckbox() {
    onFilterMovies(!filteredMovies);
  }

  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__label">
        <input className="filter-checkbox__input" type="checkbox" onClick={toggleCheckbox} />
        <span className="filter-checkbox__slider" />
      </label>
      <p className="filter-checkbox__title">Короткометражка</p>
    </div>
  );
}
