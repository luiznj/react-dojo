import React from 'react';
import Button from './Button';

function Header() {
  return (
    <header>
      <div>Rent a car</div>
      <div>
        <a href="">Home</a>
        <a href="">Catalogo</a>
        <a href="">Entre em contato</a>
      </div>
      <div>
        <button>Registrar</button>
        <button>Entrar</button>
      </div>
    </header>
  );
}

export default Header;
