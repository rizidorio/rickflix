import React from 'react';
import PageDefault from '../../../componets/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    return (
        <PageDefault>
            <h1>Cadastro Categoria</h1>

            <Link to="/">
                Home page
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;