import React from 'react';
import mainLogo from '../../assets/logo.png';
import './Header.css';

export const Header = () => {
    return (
        <div className='header'>
            <a href='#'>
                <img className='mainLogo' src={mainLogo} alt="main logo" />
            </a>
            <nav className='nav'>
                <a href="#">home</a>
                <a href="#">products</a>
                <a href="#">suscription</a>
                <a href="#">contact</a>
            </nav>
        </div>
    )
}