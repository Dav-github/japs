import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AulaExperimental from "./Pages/AulaExperimental";
import Depoimentos from "./Pages/Depoimentos";
import Informacoes from "./Pages/Informacoes";
import Projetos from "./Pages/Projetos";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
                path="/aula-experimental"
                element={<AulaExperimental />}
            ></Route>
            <Route path="/depoimentos" element={<Depoimentos />}></Route>
            <Route path="/info" element={<Informacoes />}></Route>
            <Route path="/projetos" element={<Projetos />}></Route>
        </Routes>
    );
}

export default AppRoutes;
