import { MAIN_API } from "./constants";

class MainApi {
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

  register({ email, password, name }) {
    return fetch(`${this._address}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    }).then(this._checkResponse);
  }

  login({ email, password }) {
    return fetch(`${this._address}/signin`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(this._checkResponse);
  }

  getUserInfo() {
    return fetch(`${this._address}/users/me`, {
      method: "GET",
      headers: this._headers,
      credentials: "include",
    }).then(this._checkResponse);
  }

  setUserInfo(data) {
    return fetch(`${this._address}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({
        email: data.email,
        name: data.name,
      }),
    }).then(this._checkResponse);
  }

  signOut() {
    return fetch(`${this._address}/signout`, {
      method: "DELETE",
      credentials: "include",
    }).then(this._checkResponse);
  }
}

const mainApi = new MainApi({
  address: MAIN_API,
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;
