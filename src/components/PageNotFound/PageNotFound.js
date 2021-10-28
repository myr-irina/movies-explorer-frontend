import React from "react";
import { useHistory } from "react-router-dom";

import "./PageNotFound.css";

function PageNotFound({ loggedIn }) {
  const history = useHistory();

  function handleClick() {
    if (loggedIn) {
      history.goBack();
    } else {
      history.push("/");
    }
  }

  return (
    <div className="not-found">
      <h3 className="not-found__title">
        <span className="not-found not-found_type_404">404</span> Страница не
        найдена
      </h3>
      <button className="button button_type_to-main" onClick={handleClick}>
        Назад
      </button>
    </div>
  );
}

export default PageNotFound;
