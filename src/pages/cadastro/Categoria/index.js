import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const URL_CATEGORIAS = 'https://imersao-react-alura.herokuapp.com/categorias';
    fetch(URL_CATEGORIAS).then(async (response) => {
      const jsonCategorias = await response.json();
      setCategorias([...jsonCategorias]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de categoria:
        {categoria.nome}
      </h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome"
          type="text"
          name="nome"
          value={categoria.nome}
          handleChange={handleChangeValues}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={categoria.descricao}
          handleChange={handleChangeValues}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={categoria.cor}
          handleChange={handleChangeValues}
        />

        <Button>
          Cadastrar
        </Button>

        {categorias.length === 0 && (
        <div>
          Loading...
        </div>
        )}
      </form>

      <ul>
        {categorias.map((categ) => (
          <li key={categ.id}>
            {categ.titulo}
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
