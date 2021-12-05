import axios from "axios";
// https://sujeitoprogramador.com/r-api/?api=filmes
//Base url > https://sujeitoprogramador.com/ -> rota que não muda
//r-api/?api=filmes/ (Todos os filmes)
//r-api/?api=filmes/123 (filme com id 123 'unico filme')

const api = axios.create({
  baseURL: 'https://sujeitoprogramador.com/'
});
export default api;
