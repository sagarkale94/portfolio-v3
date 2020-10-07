import React, { useEffect } from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import Toolbar from './layout/toolbar/toolbar';
import Container from './layout/container/container';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    useEffect(() => {
        AOS.init({
            duration: 1500
        });
    }, []);

    return (
        <HashRouter>
            <div className="app-container">
                <Container />
                <Toolbar />
            </div>
        </HashRouter>
    );
}

export default App;
