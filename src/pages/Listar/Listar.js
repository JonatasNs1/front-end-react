import React from 'react';
import Header from '../../components/Header/Header';

import { useEffect, useState } from 'react';
import '../Cadastrar/Cadastrar.css';
import { useParams } from 'react-router-dom'
function Listar() {
    const [buscar, setBuscar] = useState('');
    const [data, setData] = useState(null);
  
    const handleCepChange = (e) => {
        setBuscar(e.target.value);
    };
  
    const handleSearch = async () => {
      try {
        const response = await fetch(`http://localhost:3000/buscar/${buscar}`);
        const result = await response.json();
        setData(result.result);
      } catch (error) {
        console.error('Não encontrei nenhum cnpj', error);
      }
    };

 return (
  <div>
  <Header />
  
  <main>

      <div className="cards">

          <div className="card" >
          <input type="text" placeholder="Procure por um cnpj" value={buscar} onChange={handleCepChange} />
      <button className='btn-post' onClick={handleSearch}>Buscar</button>
      {data && (
        <div>
          <p>Nome: {data.nome}</p>
          <p>Email: {data.email}</p>
          <p>Senha: {data.senha}</p>
          <p>Cep: {data.cep}</p>
          <p>Numero: {data.numero}</p>
          <p>Bairro: {data.bairro}</p>
          <p>Cidade: {data.cidade}</p>
          <p>Estado: {data.estado}</p>
          <p>Telefone: {data.telefone}</p>
          <p>NumeroEmpresa: {data.numeroEmpresa}</p>
          <p>Cnpj: {data.cnpj}</p>
          <p>NomeEmpresa: {data.nomeEmpresa}</p>
         
        </div>
      )}

          </div>

      </div>

  </main>
</div>
 )
}

export default Listar;