import { MOVIES_API } from './constants';

class MoviesApi {
  constructor (options) {
    this._address = options.address;
    this._headers = options.headers;
  }
  
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`${res.status}`);
  }
  
  getMovies() {
    return fetch(`${this._address}`, {
      method: 'GET',
      headers: this._headers,
    })
    .then(this._checkResponse);
  };
};
  
const moviesApi = new MoviesApi({
  address: MOVIES_API,
  headers: {
    'Content-Type': 'application/json',
  },
});
  
export default moviesApi;