import React from 'react';
import mainLogo from '../../assets/logo.png';
import './Header.css';
import { Link } from "react-scroll"

export const Header = () => {
    return (
        <div className='header'>
            <a href='#'>
                <img className='mainLogo' src={mainLogo} alt="main logo" />
            </a>
            <nav className='nav'>
                <ul>
                    <li>home</li>
                    <li>
                        <Link 
                            className="productList" 
                            to="productList" 
                            spy={true} 
                            smooth={true} 
                            duration={700}
                        >
                        products
                        </Link>
                    </li>
                    <li>suscription</li>
                    <li>contact</li>
                </ul>
            </nav>
        </div>
    )
}