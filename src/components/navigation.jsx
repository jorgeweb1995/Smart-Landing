import React from 'react';

const Navigation = () => (
    <header className="App-header">
        <div className='App-header__container'>
            <h1 className='App-header__logo'>
                <a className='' href='index.html'>Smart Office Perú</a>
            </h1>
            <div className='App-header__icon'> </div>
            <nav className='App-header__navigation'>
                <ul>
                <li><a href='#'> Nosotros </a></li>
                <li><a href='#'> Servicios </a></li>
                <li><a href='#'> Precios </a></li>
                </ul>
            </nav>
        </div>
    </header>
)

export default Navigation;