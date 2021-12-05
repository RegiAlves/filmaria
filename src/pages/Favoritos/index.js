import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./favotitos.css";
import { toast } from "react-toastify";

export default function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("filmes");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function handleDelete(id){
    let filtroFilmes = filmes.filter((item)=>{
      return(item.id !== id);
    });

    setFilmes(filtroFilmes);//Atualiza filme 
    localStorage.setItem("filmes", JSON.stringify(filtroFilmes));//Atualiza o localStorage
    toast.success('Filme exclido com sucesso!!');
  }
  return (
    <div className="meus-filmes">
      <h1>Meu Filmes</h1>
      {filmes.length  === 0 && <span>Você não possui filmes salvos! </span>}
      <ul>
        {filmes.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.nome}</span>
              <div>
                {" "}
                <Link to={`/filmes/${item.id}`}>Acessar</Link>
                <button onClick={() => handleDelete(item.id)}>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  )
};
