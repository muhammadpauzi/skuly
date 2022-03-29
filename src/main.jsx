import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { SWRConfig } from 'swr';
import { toast } from 'react-toastify';

ReactDOM.render(
    <React.StrictMode>
        <SWRConfig
            value={{
                onError: (error, key) => {
                    if (error.status !== 403 && error.status !== 404) {
                        toast.error('Something went wrong.');
                    }
                },
            }}
        >
            <App />
        </SWRConfig>
    </React.StrictMode>,
    document.getElementById('root')
);
