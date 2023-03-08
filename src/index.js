import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './styles/style.css';
import reportWebVitals from './reportWebVitals';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import SignIn from "./pages/SignIn";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Navigate to="/home"/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route
                        path="/dashboard"
                        element={
                            store.token ? (
                                <div>DASHBOARD</div>
                            ) : (
                                <Navigate to="/signIn" replace />
                            )
                        }
                    />
                    <Route path="/signIn" element={<SignIn />} />
                    <Route
                        path={store.token && '/transactions'}
                        element={<div>TRANSACTIONS</div>}
                    />
                    <Route path="*" element={<div>ERROR</div>}/>
                </Routes>
                <Footer/>
            </Router>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
