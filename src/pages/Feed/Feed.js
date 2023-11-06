import React from 'react';

import { Link } from 'react-router-dom';
import HeaderMain from '../../components/HeaderMain/HeaderMain';
import More from '../../images/more.svg';
import axios from 'axios';
import {useState, useEffect} from 'react';

import './Feed.css';

function Feed() {
  

   const [ posts, setPosts ] = useState([])

   useEffect(() => {
       axios.get("http://localhost:3000/listar")
       .then((response) => {
           setPosts(response.data.result)
       })

       .catch(() => {
           console.log("Deu errrado")
       })

   }, [])

   async function deletePost(idCadastroEmpresa) {
      try {
       
        await axios.delete(`http://localhost:3000/excluir/${idCadastroEmpresa}`);
       
        setPosts((prevPosts) => prevPosts.filter(post => post._idCadastroEmpresa !== idCadastroEmpresa));
         
      } catch (error) {
      
        console.error('Erro ao excluir o post:', error);
      }
    }
    

 return (
    <>
       <HeaderMain/>
       <main>
         <div className='cards'>
            
         {posts.map((post, key)=>{
                  return(
                     <div className="card">
               <header>
                  <h2>Empresas Cadastradas</h2>
                  <img src={More}/>
               </header>

               <div className='lipe'></div>
               
               <p>{post.idCadastroEmpresa}</p>
               <p>{post.nome}</p>
               <p>{post.email}</p>
               <p>{post.senha}</p>
               <p>{post.cep}</p>
               <p>{post.rua}</p>
               <p>{post.numero}</p>
               <p>{post.bairro}</p>
               <p>{post.cidade}</p>
               <p>{post.estado}</p>    
               <p>{post.telefone}</p>
               <p>{post.numeroEmpresa}</p>
               <p>{post.cnpj}</p>
               <p>{post.nomeEmpresa}</p>

               <div className='btns'>
                  <div className='btn-edit'>
                     <Link  to={{ pathname: `/edit/${post._idCadastroEmpresa}` }}>
                        <button>
         
                           edit
                        </button>
                     </Link>
                  </div>

                 
                  <div className="btn-delete" >
                  <Link to='/'> 
                     <button  onClick={() => deletePost(post.idCadastroEmpresa) } >delete</button>
                  </Link>
                     
                  </div>
               </div>
            </div>
                  )
               })}
            
         </div>
       </main>
    </>
 )
}

export default Feed;