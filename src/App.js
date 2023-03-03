import React from 'react';
import {Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
    return (<>
        <Header/>
        <Routes>
            <Route path='/' component={<Home/>}/>
            <Route path="/signIn" component={<div>SIGN IN</div>}/>
        </Routes>
        <Footer/>
    </>);
}

export default App;
