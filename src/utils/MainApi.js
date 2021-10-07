import { BASE__URL } from "./constants";

class Api {
  constructor(options) {
    this._address = options.address;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`${res.status}`);
  }

  // возвращает информацию о пользователе
  getUserData() {
    return fetch(`${this._address}/users/me`, {
      method: "GET",
      headers: this._headers,
      credentials: "include",
    }).then(this._checkResponse);
  }

  //обновляет информацию о пользователе
  setUserData({ name, email }) {
    return fetch(`${this._address}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(this._checkResponse);
  }
}
