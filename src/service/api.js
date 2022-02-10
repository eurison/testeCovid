import axios from 'axios';

const api = axios.create({
  baseURL: 'https://coronavirus-19-api.herokuapp.com/',
  // baseURL: 'https://api.pm.pa.gov.br/',
});

// const myApi = axios.create({
//   baseURL: 'http://localhost:8090',
//   // baseURL: 'http://apiapoio.pm.pa.gov.br',
// });

export default api ;