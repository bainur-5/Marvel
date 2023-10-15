import React, { useEffect } from "react";
import { useGetCharacterAllQuery } from "./Services/characterServices";
import Character from "./component/ui/card/Character";
import CharacterBanner from "./component/ui/banner/CharactersBanner";
import Header from "./layout/Header/Header";

function App() {
    const { data, error, isLoading } = useGetCharacterAllQuery({ offset: '30' });

    useEffect(() => {
        if (data) {
            console.log(data);
        } else if (error) {
            console.log(error);
        }
        fetch('http://gateway.marvel.com/v1/public/characters?limit=20&offset=30&ts=1&apikey=6d2f12421182427130cb956310f6627e&hash=d1df32e147635a3f60183ada586521f5')
        .then(res => res.json())
        .then(r => console.log(r))
        .catch(error => console.log(error))
    }, [data, error]);
    console.log(data);
    console.log(isLoading);
    return (
        <div>
            <Header/>
            <Character />
            <CharacterBanner />
        </div>
    );
}

export default App;
