import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './home.css';

export default function Home() {
   const [filmes, setFilmes] = useState([]);

   useEffect(() => {

    async function loadFilmes(){
      //sujeitoprogramador.com + r-api/?api=filmes(juntando os dois)
      const response = await api.get('r-api/?api=filmes')
      //console.log(response.data);
      setFilmes(response.data);
    }
    loadFilmes();

   }, []);

  return (
  <div className="container">
    <div className="lista-filmes">
      {filmes.map((item) => {
        return(
          <article key={item.id}>
            <strong>{item.nome}</strong>
            <img alt={item.nome} src={item.foto}/>
            <Link to={`/filmes/${item.id}`} >Acessar</Link>
          </article>
        )
      })}
    </div>
  </div>
  );
}
