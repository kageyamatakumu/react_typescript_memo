import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { MemoProvider } from './compornents/providers/MemoProvider';

ReactDOM.render(
    <MemoProvider>
        <App/>
    </MemoProvider>
    ,
    document.getElementById('root')
);
