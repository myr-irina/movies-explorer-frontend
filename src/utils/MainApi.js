import { MAIN_API, MOVIES_IMAGE_BASE_URL } from "./constants";

class MainApi {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _checkResponse(res) {    
    if (res.ok) {
      return res.text().then((text) => {
        try {
          return JSON.parse(text);
        } catch (err) {
          return text;
        }
      });
    }
    return Promise.reject(`${res.status}`);
  }

  register({ email, password, name }) {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    }).then(this._checkResponse);
  }

  login({ email, password }) {
    return fetch(`${this._url}/signin`, {
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
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers,
      credentials: "include",
    }).then(this._checkResponse);
  }

  setUserInfo({ email, name }) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({
        email,
        name,
      }),
    }).then(this._checkResponse);
  }

  signOut() {
    return fetch(`${this._url}/signout`, {
      method: "DELETE",
      credentials: "include",
    }).then(this._checkResponse);
  }

  saveMovie(data) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({
        country: data.country || " ",
        director: data.director || ' ',
        duration: data.duration || ' ',
        year: data.year || ' ',
        description: data.description || ' ',
        image: `${MOVIES_IMAGE_BASE_URL}${data.image.url}` || ' ',
        trailer: data.trailerLink || ' ',
        thumbnail: `${MOVIES_IMAGE_BASE_URL}${data.image.formats.thumbnail.url}` || ' ',
        movieId: data.id || ' ',
        nameRU: data.nameRU || ' ',
        nameEN: data.nameEN || ' ',
      }),
    }).then(this._checkResponse);
  }

  getUserMovies() {
    return fetch(`${this._url}/movies`, {
      headers: this._headers,
      credentials: "include",
    }).then(this._checkResponse);
  }

  deleteMovie(id) {
    return fetch(`${this._url}/movies/${id}`, {
      headers: this._headers,
      method: "DELETE",
      credentials: "include",
    }).then(this._checkResponse);
  }
}

const mainApi = new MainApi({
  url: MAIN_API,
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;
