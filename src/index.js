import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
export {default as Header} from './components/Header'
export {default as About} from './components/About'
export {default as Counter} from './components/Counter'
export {default as Home} from './components/Home'
export {default as Form} from './components/User Entry'
// export {default as ParentComp} from './components/ParentComp'
export {default as RefsDemo} from './components/RefsDemo'
export {default as ParentPortal} from './components/ParentPortal'
export {default as ErrorBoundaryDemo} from './components/ErrorBoundaryDemo'
export {default as HigherOrderComponents} from './components/HigherOrderComponents' 
 // export {default as PortalDemo} from './components/PortalDemo' 


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
