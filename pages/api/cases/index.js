import fetch from 'isomorphic-unfetch';

const API_COUNTRY = 'https://covid19.mathdro.id/api/countries/brazil';
let cached = {
  current: {},
  previous: {}
};

export default (req, res) => {
  fetch(API_COUNTRY)
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
};
