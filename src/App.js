import React from "react";
import { useSelector } from 'react-redux';
import Header from "./components/Header";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import Transaction from "./pages/Transaction";
import Error from "./pages/Error";
import Footer from "./components/Footer";

const App = () => {
    const store = useSelector((state) => state);

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Navigate to="/home"/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route
                    path="/dashboard"
                    element={
                        store.token ? (
                            <Dashboard />
                        ) : (
                            <Navigate to="/signIn" replace />
                        )
                    }
                />
                <Route path="/signIn" element={<SignIn />} />
                <Route
                    path={store.token && '/transactions'}
                    element={<Transaction />}
                />
                <Route path="*" element={<Error />}/>
            </Routes>
            <Footer/>
        </>
    )
}
export default App;