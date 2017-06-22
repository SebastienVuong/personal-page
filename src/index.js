import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Languages from './components/pages/Languages';
import Projects from './components/pages/Projects';
import Others from './components/pages/Others';
import Contact from './components/pages/Contact';

import './index.css';


const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/aboutme" component={AboutMe}/>
            <Route path="/languages" component={Languages}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/others" component={Others}/>
            <Route path="/contact" component={Contact}/>
        </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
