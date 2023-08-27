import React from "react";
import './Footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'



const Footer = () =>{
    return(
        <div className="footer-container">
            <hr />
            <div className="footer">
                <div className="social-links">
                    <a href="https://github.com/Sebastiangabrielesposito"><img src={Github} alt="" /></a>
                    <a href="https://www.instagram.com/sebaespositook/"><img src={Instagram} alt="" /></a>
                    <a href="https://www.linkedin.com/in/sebastian-gabriel-esposito-4b1bb9123/"><img src={Linkedin} alt="" /></a>
                </div>
                <div className="logo-f">
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className="blur footer-blur-f1"></div>
            <div className="blur footer-blur-f2"></div>
        </div>
    )
}
export default Footer;