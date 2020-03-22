import fetch from 'isomorphic-unfetch';

const API_COUNTRY = 'https://covid19.mathdro.id/api/countries/brazil';

export default (req, res) => {
  fetch(API_COUNTRY)
    .then(res => res.json())
    .then(res.status(200).json)
    .catch(err => res.status(500).send(err));
};
