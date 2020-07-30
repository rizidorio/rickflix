import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../componets/PageDefault';
import FormField from '../../../componets/FormField';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState(['Teste']);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  }
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(e) {
    setValue(e.target.getAttribute('name'), 
             e.target.value);
  }

    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>
  
        <form onSubmit={function handleSubmit(e) {
          e.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);
          setValues({valoresIniciais});
        }}>
          
          <FormField
            label="Nome da Categoria:"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />

          <FormField
            label="Descrição:"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />

          <FormField
            label="Cor:"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />
          {/* <div>
            <label>
              Descrição:
              <textarea
                name="descricao"
                value={values.descricao}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Cor:
              <input
                type="color"
                name="cor"
                value={values.cor}
                onChange={handleChange}
              />
            </label>
          </div> */}
  
          <button>
            Cadastrar
          </button>
        </form>

        <ul>
          {categorias.map((categoria, index) => {
              return (
                <li key={`${categoria}${index}`}>
                  {categoria.nome}
                </li>
              );
          })}
        </ul>
  
  
        <Link to="/">
          Ir para home
        </Link>
      </PageDefault>
    )
  }

export default CadastroCategoria;