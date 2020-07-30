import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState(valoresIniciais);
  
  function handleSubmit(event) {
    event.preventDefault();
    setCategorias([
      ...categorias,
      categoria
    ])
    setCategoria(valoresIniciais);
  }

  function handleChangeValues(event) {
    const { name, value } = event.target;
    setCategoria({
      ...categoria,
      [name]: value
    });
  }

  return (
    <PageDefault>
      <h1>Cadastro de categoria: {categoria.nome}</h1>

      <form onSubmit={handleSubmit}>

        <FormField 
          label="Nome da categoria" 
          type="text" 
          name="nome" 
          value={categoria.nome} 
          handleChange={handleChangeValues} 
        />
        
        <div>
          <label>
            Descrição da Categoria:
            <textarea
              type="text"
              name="descricao"
              value={categoria.descricao}
              onChange={handleChangeValues}
            />
          </label>
        </div>
        
        <FormField 
          label="Cor da Categoria" 
          type="color" 
          name="cor" 
          value={categoria.cor} 
          handleChange={handleChangeValues} 
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, index) => {
          return (
            <li key={index}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>
      <Link to="/">
        Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;