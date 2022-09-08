import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
    return (
    <div className="App">
         <Routes>
            <Route path='/' element={ <Navigate to={'/product/'} /> } />
            <Route element={<Main/>} path="/product/" />
            <Route element={<Detail/>} path="/product/:id" />
            <Route element={<Update/>} path="/product/:id/edit"/>
         </Routes>                         
    </div>
    );
}
export default App;