import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState(valoresIniciais);

  function handleSubmit(event) {
    event.preventDefault();
    setCategorias([
      ...categorias,
      categoria,
    ]);
    setCategoria(valoresIniciais);
  }

  function handleChangeValues(event) {
    const { name, value } = event.target;
    setCategoria({
      ...categoria,
      [name]: value,
    });
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de categoria:
        {categoria.nome}
      </h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da categoria"
          type="text"
          name="nome"
          value={categoria.nome}
          handleChange={handleChangeValues}
        />

        <FormField
          label="Descrição da Categoria"
          type="textarea"
          name="descricao"
          value={categoria.descricao}
          handleChange={handleChangeValues}
        />

        <FormField
          label="Cor da Categoria"
          type="color"
          name="cor"
          value={categoria.cor}
          handleChange={handleChangeValues}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria, index) => (
          <li key={index}>
            {categoria.nome}
          </li>
        ))}
      </ul>
      <Link to="/">
        Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
