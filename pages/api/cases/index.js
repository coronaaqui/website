import fetch from 'isomorphic-unfetch';

const API_COUNTRY = 'https://covid19.mathdro.id/api/countries/brazil';
const API_REGION = 'https://covid19-brazil-api.now.sh/api/report/v1';
let cached = {
  current: {},
  previous: {}
};

export default (req, res) => {
  const {
    query: { uf }
  } = req;

  function filterByRegion(resolve) {
    return response =>
      resolve(
        response.data.filter(
          item => item.uf.toLowerCase() === uf.toLowerCase()
        )[0]
      );
  }

  if (uf) {
    return fetch(API_REGION)
      .then(response => response.json())
      .then(filterByRegion(res.status(200).json));
  }

  return fetch(API_COUNTRY)
    .then(res => res.json())
    .then(payload => {
      const response = {
        confirmed: {
          ...payload.confirmed,
          previousValue: cached.previous.confirmed?.value
        },
        recovered: {
          ...payload.recovered,
          previousValue: cached.previous.recovered?.value
        },
        deaths: {
          ...payload.deaths,
          previousValue: cached.previous.deaths?.value
        },
        ...payload,
        ...cached
      };

      if (cached.current.lastUpdate !== response.lastUpdate) {
        cached.previous = cached.current;
        cached.current = response;
      }

      res.status(200).json(response);
    })
    .catch(err => {
      const { current, previous } = cached;

      const payload = Object.keys(cached.current).length
        ? current
        : Object.keys(cached.previous).length
        ? previous
        : err;

      res.status(500).send(payload);
    });
};/* ............. */
