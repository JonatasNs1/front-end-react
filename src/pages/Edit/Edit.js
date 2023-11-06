import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import { useNavigate, useNavigatem, useParams } from 'react-router-dom';


const validationPost = yup.object().shape({
  // cnpj: yup.string().length(14, 'CNPJ deve ter 14 dígitos').required('Campo obrigatório'),
  // cep: yup.string().matches(/^\d{5}-\d{3}$/, 'CEP inválido').required('Campo obrigatório'),
  nome: yup.string().required('Campo obrigatório'),
  email: yup.string().required('Campo obrigatório'),
  senha: yup.string().required('Campo obrigatório'),
  cep: yup.string().required('Campo obrigatório'),
  rua: yup.string().required('Campo obrigatório'),
  numero: yup.string().required('Campo obrigatório'),
  bairro: yup.string().required('Campo obrigatório'),
  cidade: yup.string().required('Campo obrigatório'),
  estado: yup.string().required('Campo obrigatório'),
  telefone: yup.string().required('Campo obrigatório'),
  numeroEmpresa: yup.string().required('Campo obrigatório'),
  cnpj: yup.string().required('Campo obrigatório'),
  nomeEmpresa: yup.string().required('Campo obrigatório'),
})


function Edit() {

  const navegar = useNavigate()

  const { idCadastroEmpresa } = useParams()
  const addPost = data => axios.put(`http://localhost:3000/atualizar/${idCadastroEmpresa}`, data)
  .then(() => {
      console.log(data)
    //   return data;
    //   navegar("/");
  })
  .catch(() => {
      console.log("DEU ERRADO")
  })

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(validationPost)
})


  useEffect(() => {
      axios.get(`http://localhost:3000/listar/${idCadastroEmpresa}`)
      .then((response) => {
        reset(response.data.result)
      })
      .catch(() => {
          console.log("Deu errrado")
      })
      
  }, [])


 return (
    <>
      <Header/>
      <main>
            <div className='card-post'>
                <h1>Cadastrar Empresa</h1>
                <div className='line-post'></div>
                <div className='card-body-post'>

                    <form onSubmit={handleSubmit(addPost)}>
                    
                    <div className='filds'>
                        <label>Nome</label>
                        
                        <input type='text' name='nome' {...register("nome")}>
                          
                        </input>
                        <p className='error-message'>{errors.nome?.message}</p>
                    </div>

                    <div className='filds'>
                        <label>Email</label>
                        <input type='email'  name='email' {...register("email")}/>
                        <p className='error-message'>{errors.email?.message}</p>
                    </div>

                    <div className='filds'>
                        <label>Senha</label>
                        <input type='password' name='senha' {...register("senha")}/>
                        <p className='error-message'>{errors.senha?.message}</p>
                    </div>

                    <div className='filds'>
                        <label>Cep</label>
                        <input type='text' name='cep' {...register("cep")}/>
                        <p className='error-message'>{errors.cep?.message}</p>
                    </div>

                    <div className='filds'>
                        <label>Rua</label>
                        <input type='text' name='rua' {...register("rua")}/>
                        <p className='error-message'>{errors.rua?.message}</p>
                    </div>

                    <div className='filds'>
                        <label>Numero</label>
                        <input type='number' name='numero' {...register("numero")}/>
                        <p className='error-message'>{errors.numero?.message}</p>
                    </div>

                    <div className='filds'>
                        <label>Bairro</label>
                        <input type='text' name='bairro' {...register("bairro")}/>
                        <p className='error-message'>{errors.bairro?.message}</p>
                    </div>

                    <div className='filds'>
                        <label>Cidade</label>
                        <input type='text' name='cidade' {...register("cidade")}/>
                        <p className='error-message'>{errors.cidade?.message}</p>
                    </div>

                    <div className='filds'>
                        <label>Estado</label>
                        <input type='text' name='estado' {...register("estado")}/>
                        <p className='error-message'>{errors.estado?.message}</p>
                    </div>

                    <div className='filds'>
                        <label>Telefone</label>
                        <input type='text'name='telefone' {...register("telefone")}/>
                        <p className='error-message'>{errors.telefone?.message}</p>
                    </div>

                    <div className='filds'>
                        <label>Numero da empresa</label>
                        <input type='number' name='numeroEmpresa' {...register("numeroEmpresa")}/>
                        <p className='error-message'>{errors.numeroEmpresa?.message}</p>
                    </div>

                    <div className='filds'>
                        <label>cnpj</label>
                        <input type='text' name='cnpj' {...register("cnpj")}/>
                        <p className='error-message'>{errors.cnpj?.message}</p>
                    </div>

                    <div className='filds'>
                        <label>Nome da Empresa</label>
                        <input type='text' name='nomeEmpresa' {...register("nomeEmpresa")}/>
                        <p className='error-message'>{errors.nomeEmpresa?.message}</p>
                    </div>

                    <div className='btn-post'>
                        <button type="">Atualizar Cadastro</button>
                    </div>
                </form>

                {/* })} */}
                    
                </div>
            </div>
        </main>
    </>
 )
}

export default Edit;