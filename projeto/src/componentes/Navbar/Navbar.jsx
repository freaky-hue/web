import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import './Navbar.css'

function Navbar(){

    // Apresentar cor na Navbar depois de descer até 500px para a navbar não ficar transparente no fundo branco
    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 500 ? setSticky(true) : setSticky(false);
        })
    },[]);


    // Mostrar menu lateral quando a (resolução fica para telemovel, definido no css menu-icon passa de hidden para block) quando clicka
    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = () =>{
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }
    //Links são usados como anchor <a> de html  
    return(
        <nav className={`container ${sticky? 'nav-color' :''}`}>
            <img className="logo" src={logo} alt="..." />
            <ul className={mobileMenu?'':'hide-mobile-menu'}>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
                <li><Link to='about' smooth={true} offset={-150} duration={500}>About</Link></li>
                <li><Link to='gallery' smooth={true} offset={-260} duration={500}>Gallery</Link></li>
                <li><Link to='contact' smooth={true} offset={-260} duration={500}>Contact</Link></li>
                
            </ul>
            <img src={menu_icon} alt="..." className="menu-icon" onClick={toggleMenu}/>
        </nav>
    );
}

export default Navbar