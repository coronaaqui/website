import fetch from 'isomorphic-unfetch';

const API_BASE = 'https://api.coronabrasil.org';

export default (req, res) => {
  res.status(200).json({ result: false });
};
