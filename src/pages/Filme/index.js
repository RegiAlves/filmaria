import { useParams, useNavigate  } from 'react-router-dom'; // import do hook
import { useEffect, useState } from 'react';
//useNavigate para substituir o useHistory
import api from '../../services/api';
import './filmes-info.css'
import { toast } from "react-toastify";

export default function Filme(){
  const { id } = useParams();
  const navigate  = useNavigate ();

  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{

    async function loadFilme(){
      const response = await api.get(`r-api/?api=filmes/${id}`);
      if(response.data.length === 0){
        //Tentou acessar um id que não existe , navego pela home!
        navigate('/');
        return;
      }
     
      setFilme(response.data);
      setLoading(false);
    }
    loadFilme();

    return () =>{
      console.log('COMPONENTE DESMONTADO');
    }

  },[navigate ,id]);

  function salvaFilme(){
    
    const minhaLista = localStorage.getItem('filmes');
    //console.log(`Essa á minha lista${minhaLista}`)//lista com todos os filmes

    let filmesSalvos = JSON.parse(minhaLista) || [];
    //Se tiver algum filme salvo com esse mesmo id precisa ignorar..
    const temFilme = filmesSalvos.some((filmesSalvos) => filmesSalvos.id === filme.id )
    if(temFilme){
      toast.error('Você ja possui esse filme!!');
      return;
      //Para a execução do código
    }

    filmesSalvos.push(filme);
   
    localStorage.setItem('filmes',JSON.stringify(filmesSalvos));
    toast.success('Filme salvo com sucesso!!');
 }


  if(loading){
    return(
      <div className="filme-info">
        <h1>Carregando seu filme...</h1>
      </div>
    )
  }

  return(
    <div className="filme-info">
        <h1>{filme.nome}</h1>
        <img src={filme.foto} alt={filme.nome} />
        <h2>Sinopse: </h2>
        {filme.sinopse}
        <div className="botoes">
          <button onClick={ salvaFilme } >Salvar</button>
          <button>
            <a target="_blank" rel="noreferrer" href={`https://youtube.com/results?search_query=${filme.nome} Trailer`} >
              Trailer
            </a>
          </button>
        </div>
      </div>
  )
}