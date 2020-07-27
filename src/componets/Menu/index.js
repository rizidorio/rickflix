import React from 'react';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button';

//import ButtonLink from './components/ButtonLink'

import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={ Logo } alt="Rickflix Logo" />
            </a>

            <Button className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;