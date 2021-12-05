import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import Filme from  './pages/Filme';
import NotFound from "./pages/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exect path="/filmes/:id"  element={<Filme />} ></Route>
        <Route exect path="/favoritos"  element={<Favoritos/>} ></Route>
        <Route exect path="*"  element={<NotFound/>} ></Route> {/* chamando a padina erro(não encontrada) */}
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
