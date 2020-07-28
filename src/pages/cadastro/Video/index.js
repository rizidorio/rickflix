import React from 'react';
import PageDefault from '../../../componets/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo() {
    return (
        <PageDefault>
            <h1>Cadastro video</h1>

            <Link to="/cadastro/categoria">
                Cadastro Categoria
            </Link>
        </PageDefault>
    );
}

export default CadastroVideo;