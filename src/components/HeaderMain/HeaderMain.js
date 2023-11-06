import React from "react";
import {Link} from 'react-router-dom';
import './HeaderMain.css';
function HeaderMain(){
    return(
        <header>
            <div className="container">
                <div className="logo">
                    <h1>Energizou</h1>
                </div>
                <div className="btn-newCadastro">
                    <Link to='/cadastrar'>
                        <button>Adicione uma nova empresa</button>
                    </Link>
                </div>
                <div className='btn-newCadastro'>
                  <Link to='/listar'>
                     <button>
                        Buscar por Cnpj
                     </button>
                     </Link>
                  </div>
            </div>
        </header>
    )
}

export default HeaderMain;