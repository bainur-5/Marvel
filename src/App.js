import React, { useEffect } from "react";
import { useGetCharacterAllQuery } from "./Services/characterServices";
import Character from "./component/ui/card/Character";
import CharacterBanner from "./component/ui/banner/CharactersBanner";
import Header from "./layout/Header/Header";
import Main from "./pages/Main/Main";
import AppRoute from "./Router/AppRoute";

function App() {
    return (
        <div>
            <Header/>
            <AppRoute/>
        </div>
    );
}

export default App;
