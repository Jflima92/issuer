import { CLIENT_ID, CLIENT_SECRET } from '../configs/config.js'

const AUTH_URL_PATH = 'https://api.github.com/authorizations';

export function login(username, password) {

  const auth = username.trim() + ':' + password.trim();
  const encodedAuth = new Buffer(auth).toString('base64');

  return fetch(AUTH_URL_PATH, {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + encodedAuth,
      'Content-Type': 'application/json; charset=utf-8',
      'Accept': 'application/vnd.github.v3+json'
    },
    body: JSON.stringify({
      'client_id': CLIENT_ID,
      'client_secret': CLIENT_SECRET,
      'scopes': ['user', 'repo'],
      'note': 'issuer project'
    })
  }).then(response =>
    response.json()
      .then(json => {
        if (response.status < 400) {
          return json.token;
        } else {
          throw new Error(json.message);
        }
      })
    );
}