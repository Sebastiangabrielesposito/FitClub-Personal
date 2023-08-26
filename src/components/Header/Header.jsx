import React, { useState, useEffect } from "react";
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import {Link} from 'react-scroll'

const Header = () => {

    // const mobile = window.innerWidth<=768 ? true : false

    const [mobile, setMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const [menuOpened, setMenuOpened] = useState(false)

    return(
        <div className="header">

            <img src={Logo} alt="" className="logo"/>
            
            {menuOpened === false && mobile === true ? (
                <div 
                style={{backgroundColor:'gray', padding: '0.5rem', borderRadius: '5px'}}
                onClick = {() => setMenuOpened(true)} >
                    <img 
                    src={Bars} alt="" 
                    style={{width:'1.5rem', height:'1.5rem'}}/>
                </div>
                
                ) : (    
                
                <ul className="header-menu">
                    <li><Link
                    onClick = {() => setMenuOpened(false)}
                    activeClass='active'
                    to="home"
                    spy={true}
                    smooth={true}
                    >Home</Link></li>
                    
                    <li><Link
                    onClick = {() => setMenuOpened(false)}
                    to="programs"
                    spy={true}
                    smooth={true}
                    >Programas</Link></li>
                    
                    <li><Link
                    onClick = {() => setMenuOpened(false)}
                    to="reasons"
                    spy={true}
                    smooth={true}
                    >Nosotros</Link></li>
                    
                    <li ><Link
                    onClick = {() => setMenuOpened(false)}
                    to="plans"
                    spy={true}
                    smooth={true}
                    >Planes</Link></li>
                    
                    <li ><Link
                    onClick = {() => setMenuOpened(false)}
                    to="testimonials"
                    spy={true}
                    smooth={true}
                    >Testimonios</Link></li>
                </ul> )}  
        </div>
    )
}
export default Header;