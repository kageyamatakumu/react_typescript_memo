import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { MemoProvider } from './compornents/providers/MemoProvider';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <MemoProvider>
            <App/>
        </MemoProvider>
    </BrowserRouter>
    ,
    document.getElementById('root')
);
