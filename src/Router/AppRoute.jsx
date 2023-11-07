import { Routes, Route, Outlet } from "react-router-dom";
import Main from "../pages/Main/Main";
import Characters from "../pages/Character/Characters";
import Comics from "../pages/Comics/Comics";
import Events from "../pages/Events/Events";

const AppRoute = () => (
    <Routes>
            <Route ptah="" index element={<Main />} exact/>
            <Route path="characters" element={<Characters />} />
            <Route path="comics" element={<Comics />} />
            <Route path="events" element={<Events />} />
    </Routes>
);

export default AppRoute;
