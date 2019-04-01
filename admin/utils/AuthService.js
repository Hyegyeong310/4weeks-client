import axios from 'axios';
export default class AuthService {
  constructor(domain) {
    this.domain = domain || 'auth_url';
    this.fetch = this.fetch.bind(this);
    this.login = this.login.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }
  login(username, password) {
    return this.fetch(`${this.domain}/oauth/token`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
        client_id: 'admin',
        grant_type: 'password'
      })
    })
      .then(res => {
        this.setToken(res.access_token, res.expires_in);
        return this.fetch(`${this.domain}/account`, {
          method: 'GET'
        });
      })
      .then(res => {
        this.setProfile(res);
        return Promise.resolve(res);
      });
  }
  loggedIn() {
    const token = this.getToken();
    return !!token;
  }
  setProfile(profile) {
    localStorage.setItem('profile', JSON.stringify(profile));
  }
  getProfile() {
    const profile = localStorage.getItem('profile');
    return profile ? JSON.parse(localStorage.profile) : '';
  }
  setToken(accessToken) {
    localStorage.setItem('access_token', accessToken);
  }
  getToken() {
    return localStorage.getItem('access_token');
  }
  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('profile');
  }
  _checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      let err = new Error(response.statusText);
      err.response = response;
      throw err;
    }
  }
  fetch(url, options) {
    const headers = {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json; charset=UTF-8',
      Authorization: 'Basic YWRtaW46'
    };
    if (this.loggedIn()) {
      headers['Authorization'] = 'Bearer ' + this.getToken();
    }
    return fetch(url, {
      headers,
      ...options
    })
      .then(this._checkStatus)
      .then(res => res.json());
  }
}
