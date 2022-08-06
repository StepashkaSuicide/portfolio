import './App.css';
import {Header} from "./header/Header";
import React from "react";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./myProjects/Projects";
import {Contacts} from "./contacts/Contacts";
import {DistanceWork} from "./distanceWork/DistanceWork";
import {Footer} from "./footer/Footer";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <DistanceWork/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
