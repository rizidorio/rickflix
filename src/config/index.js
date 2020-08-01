const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://rickflix.herokuapp.com';

export default {
  URL,
};
