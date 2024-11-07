import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './Provider';
import './i18n/config';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <AppProvider> {/* Wrap App with AppProvider */}
            <App />
        </AppProvider>
    </React.StrictMode>
);

reportWebVitals();
