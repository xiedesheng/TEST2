import React from 'react';
import ReactDOM from 'react-dom';
import './components/stylesheets/main.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import 'swiper/dist/css/swiper.min.css';

import './modules/rem'

import store from './store'
import { Provider } from 'react-redux'


import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
<Provider store = { store } >
    <Router>
        <App />
    </Router>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
