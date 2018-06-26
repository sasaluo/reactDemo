//react-app入口文件

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Pool from './Pool';
import './config/rem'
//import {Router, Route, IndexRoute} from 'react-router';
import {BrowserRouter as Router ,Route,Redirect} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

const router = (
	<Router>  
		<div>	
			<Route path="/App" component={App}/>	
        	<Route path="/Home" component={Home}/>
        	<Route path="/Pool" component={Pool}/>
        </div>                                                                                                     
    </Router> 
);

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
