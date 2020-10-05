import React from 'react';
import './container.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../../components/home/home';
import About from '../../components/about/about';
import Portfolio from '../../components/portfolio/portfolio';
import Contact from '../../components/contact/contact';

function Container() {
    return (
        <div className="container">
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
                <Redirect from="/" to="/home" />
            </Switch>
        </div>
    );
}

export default Container;