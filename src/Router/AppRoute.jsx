import { Routes, Route, Navigate } from "react-router-dom";
import Main from "../pages/Main/Main";
import Characters from "../pages/Characters/Characters";
import Comics from "../pages/Comicses/Comics";
import Events from "../pages/Events/Events";
import Character from "../pages/Chracter/Character";
import AboutComics from "../pages/AboutComics/AboutComics";
import AboutEvent from "../pages/AboutEvents/AboutEvent";

const AppRoute = () => (
    <Routes>
            <Route path="/home" element={<Main />} index/>
            <Route path="/characters" index element={<Characters />} />
            <Route path="/comics" index element={<Comics />} />
            <Route path="/events" index element={<Events />} />
            <Route path="/personcharacter" index element={<Character/>}/>
            <Route path="/comic" index element={<AboutComics/>}/>
            <Route path="/event" index element={<AboutEvent/>}/>
            <Route path="*" element={<Navigate to='/home' />} />
    </Routes>
);

export default AppRoute;
