import React from 'react';
import mainLogo from '../../assets/logo.png';
import './Header.css';

export const Header = () => {
    return <img className='mainLogo' src={mainLogo} alt="main logo" />
}