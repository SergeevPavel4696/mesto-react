import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const page = ReactDOM.createRoot(document.getElementById('page'));
page.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

reportWebVitals();
