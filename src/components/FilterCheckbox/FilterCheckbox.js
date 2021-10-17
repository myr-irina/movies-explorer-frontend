import React from "react";
import "./FilterCheckbox.css";

export default function FilterCheckbox({ onCheckboxToggle }) {
  const [isChecked, setChecked] = React.useState(false);
  function onChange(event) {
    onCheckboxToggle(!isChecked);
    setChecked(event.target.checked);
  }

  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__label">
        <input
          className="filter-checkbox__input"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => onChange(e)}
        />
        <span className="filter-checkbox__slider" />
      </label>
      <p className="filter-checkbox__title">Короткометражка</p>
    </div>
  );
}
