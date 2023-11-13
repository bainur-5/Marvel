import { Routes, Route, Outlet } from "react-router-dom";
import Main from "../pages/Main/Main";
import Characters from "../pages/Characters/Characters";
import Comics from "../pages/Comicses/Comics";
import Events from "../pages/Events/Events";
import Character from "../pages/Chracter/Character";
import AboutComics from "../pages/AboutComics/AboutComics";

const AppRoute = () => (
    <Routes>
            <Route ptah="" index element={<Main />} exact/>
            <Route path="characters" index element={<Characters />} />
            <Route path="comics" index element={<Comics />} />
            <Route path="events" index element={<Events />} />
            <Route path="personcharacter" index element={<Character/>}/>
            <Route path="onComics" index element={<AboutComics/>}/>
    </Routes>
);

export default AppRoute;
