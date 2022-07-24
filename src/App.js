import './App.css';
import {Header} from "./header/Header";
import React from "react";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./myProjects/Projects";
import {DistanceWork} from "./distanceWork/DistanceWork";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <DistanceWork/>
        </div>
    );
}

export default App;
