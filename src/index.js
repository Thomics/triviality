import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import StartPage from './containers/StartPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<StartPage />, document.getElementById('root'));
registerServiceWorker();
