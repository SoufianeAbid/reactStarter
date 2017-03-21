import React from 'react';
import ReactDOM from 'react-dom';
var {Route, Router, IndexRoute, hashHistory, browserHistory} = require('react-router');



// import Router from 'react-router';

import Home from './components/Home';
import Nav from './components/Nav';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={Home}  />
        <Route path='/about' component={Nav} />
    </Router>,
    document.getElementById('root')
)
