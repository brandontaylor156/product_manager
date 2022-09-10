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
            <Route path="/product/" element={<Main/>} />
            <Route path="/product/:id" element={<Detail/>} />
            <Route path="/product/:id/edit" element={<Update/>} />
         </Routes>                         
    </div>
    );
}
export default App;