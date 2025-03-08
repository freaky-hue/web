import './About.css'
import about_img from '../../assets/about.png'

import React from 'react'

function About(){
  return (
    <div className='about'>
        <div className="about-left">
            <img className='about-img' src={about_img} alt='...'/>

        </div>

        <div className="about-right">
            <h3>Sobre nós</h3>
            <p>O CINEL - Centro de Formação Profissional da Indústria Eletrónica, Energia, Telecomunicações e 
              Tecnologias da Informação é uma referência na qualificação e requalificação de profissionais para o setor tecnológico.
               Com mais de três décadas de experiência, oferecemos formação especializada e certificada, preparando talentos para os desafios da Indústria 4.0.</p>
            <p>A nossa missão é impulsionar o desenvolvimento de competências nas áreas da eletrónica, energia, telecomunicações e TI, alinhando-nos com as exigências do mercado de trabalho.
               Trabalhamos em estreita colaboração com empresas e entidades do setor, garantindo formação de excelência e oportunidades reais de empregabilidade.</p>
            <p>No CINEL, acreditamos que o conhecimento transforma carreiras e promove a inovação. Seja para jovens à procura do primeiro emprego, 
              profissionais que querem evoluir ou empresas que desejam formar as suas equipas, somos o parceiro ideal na construção do futuro tecnológico.</p>
        </div>


    </div>
  )
}

export default About