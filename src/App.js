import './style.css'
import Router from "./routes";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <div className="app">
      <Router/>
      <ToastContainer autoClose={3000}/>
    </div>
  );
}


