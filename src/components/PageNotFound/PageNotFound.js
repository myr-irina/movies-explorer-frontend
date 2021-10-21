import React from "react";
import { Link, useHistory } from "react-router-dom";

import "./PageNotFound.css";

function PageNotFound() {
  const history = useHistory();

  function handleClick() {
    history.goBack();
  }

  return (
    <div className="not-found">
      <h3 className="not-found__title">
        <span className="not-found not-found_type_404">404</span> Страница не
        найдена
      </h3>
      <Link className="button button_type_to-main" onClick={handleClick}>
        Назад
      </Link>
    </div>
  );
}

export default PageNotFound;
