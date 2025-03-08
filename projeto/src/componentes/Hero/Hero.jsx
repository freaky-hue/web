import React from "react";
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

function Hero(){
    return(
        <div className="hero container">
            <div className="hero-text">
                <h1>Garantimos uma educação melhor para um mundo melhor.</h1>
                <p>O nosso currículo inovador foi projetado para capacitar os alunos com o conhecimento, as competências
                     e as experiências necessárias para se destacarem no dinâmico campo da educação.</p>
                     <a href="https://www.cinel.pt/appv2/" target="__bank">
                        <button className="btn">Explorar <img src={dark_arrow} alt="..."/></button>
                     </a>
            </div>
        </div>
    );

}

export default Hero;