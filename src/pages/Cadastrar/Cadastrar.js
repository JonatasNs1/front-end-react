import {useState} from 'react';
import Header from '../../components/Header/Header';
import {useForm} from 'react-hook-form';
import './Cadastrar.css';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';



const validationPost = yup.object().shape({
    // cnpj: yup.string().length(14, 'CNPJ deve ter 14 dígitos').required('Campo obrigatório'),
    // cep: yup.string().matches(/^\d{5}-\d{3}$/, 'CEP inválido').required('Campo obrigatório'),
    nome: yup.string().required('Campo obrigatório'),
    email: yup.string().required('Campo obrigatório'),
    senha: yup.string().required('Campo obrigatório'),
    cep: yup.string().required('Campo obrigatório'),
    numero: yup.string().required('Campo obrigatório'),
    telefone: yup.string().required('Campo obrigatório').max(10, 'Insira um numero valido').min(10, "Insira um numero valido"),
    numeroEmpresa: yup.string().required('Campo obrigatório'),
    cnpj: yup.string().required('Campo obrigatório'),
    nomeEmpresa: yup.string().required('Campo obrigatório'),
})

function Cadastrar() {

    const navegar = useNavigate();

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(validationPost)
    });

const addPost = data => axios.post("http://localhost:3000/cadastrar", data)
      .then(() => {
          console.log("Cadastrado com sucesso");
          
      })
      .catch(() => {
        console.log('Não foi possivel cadastrar')
          
      })
  
      

    // const [cep, setCep] = useState('');
    // const [addressData, setAddressData] = useState({
    //   rua: '',
    //   bairro: '',
    //   cidade: '',
    //   estado: '',
    // });
  
    // const handleCepChange = (e) => {
    //   const newCep = e.target.value;
    //   setCep(newCep);
  
      
    //   if (newCep.length === 8) {
    //     fetch(`https://viacep.com.br/ws/${newCep}/json/`)
    //       .then((response) => response.json())
    //       .then((data) => {
    //         // console.log(data);
    //         setAddressData({
    //             rua: data.logradouro,
    //             bairro: data.bairro,
    //             cidade: data.localidade,
    //             estado: data.uf,
    //         });
    //       })
    //       .catch((error) => {
    //         console.error('Erro ao consultar o CEP:', error);
    //       });
    //   }
    // };


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
                            <input type='text' name="nome" {...register("nome")}/>
                            <p className='error-message'>{errors.nome?.message}</p>
                        </div>

                        <div className='filds'>
                            <label>Email</label>
                            <input type='text' name='email' {...register("email")}/>
                            <p className='error-message'>{errors.email?.message}</p>
                        </div>

                        <div className='filds'>
                            <label>Senha</label>
                            <input type='text' name='senha' {...register("senha")}/>
                            <p className='error-message'>{errors.senha?.message}</p>
                        </div>

                        <div className='filds'>
                            <label>Cep</label>
                            {/* value={cep}  onChange={handleCepChange} */}
                            <input type='text' name='cep' {...register("cep")}/>
                            <p className='error-message'>{errors.cep?.message}</p>
                        </div>

                        <div className='filds'>
                            <label>Rua</label>
                            {/* value={addressData.rua} */}
                            <input type='text' name='rua' {...register("rua")}  />
                            <p className='error-message'>{errors.rua?.message}</p>
                        </div>

                        <div className='filds'>
                            <label>Numero</label>
                            <input type='number' name='numero' {...register("numero")}/>
                            <p className='error-message'>{errors.numero?.message}</p>
                        </div>

                        <div className='filds'>
                            <label>Bairro</label>
                            {/* value={addressData.bairro} */}
                            <input type='text' name='bairro' {...register("bairro")} />
                            <p className='error-message'>{errors.bairro?.message}</p>
                        </div>

                        <div className='filds'>
                            <label>Cidade</label>
                            {/* value={addressData.cidade} */}
                            <input type='text' name='cidade' {...register("cidade")} />
                            <p className='error-message'>{errors.cidade?.message}</p>
                        </div>

                        <div className='filds'>
                            <label>Estado</label>
                            {/* value={addressData.estado} */}
                            <input type='text' name='estado' {...register("estado")} />
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
                            {/* <Link to={'/'}>
                            <button type="">Cadastrar Empresa</button>
                            </Link> */}
                            <button type="">Cadastrar Empresa</button>
                           
                        </div>
                    </form>

                </div>
            </div>
        </main>
    </>
 )
}

export default Cadastrar;