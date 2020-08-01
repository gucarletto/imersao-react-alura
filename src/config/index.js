const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://imersao-react-alura.herokuapp.com';

export default {
  URL,
};
