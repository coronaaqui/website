import fetch from 'isomorphic-unfetch';

const API_BASE = 'https://api.coronabrasil.org';

export function api(url, ...args) {
  return fetch(`${API_BASE}${url}`, ...args);
}
