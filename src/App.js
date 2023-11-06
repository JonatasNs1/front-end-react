import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Cadastrar from './pages/Cadastrar/Cadastrar';
import Edit from './pages/Edit/Edit';
import Feed from './pages/Feed/Feed';
import Listar from './pages/Listar/Listar';

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Feed/>} />
        <Route exact path="/cadastrar" element={<Cadastrar/>} />
        <Route exact path="/edit/:idCadastroEmpresa" element={<Edit/>} />
        <Route exact path="/listar" element={<Listar/>} />
      </Routes>

    </Router>
  );
}

export default App;




