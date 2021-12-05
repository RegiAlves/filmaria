import './notFound.css'
import { Link } from 'react-router-dom';

export default function NotFound(){
  return(
    <div className="not-found">
      <h1>404</h1>
      <h2>Página não encontrada! </h2>
      <Link to="/">Voltar para a página inicial</Link>
    </div>
  );
}