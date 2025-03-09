import './Testemonials.css'
import React from 'react'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'



function Testemonials(){


    return(
        <div className="testemonials">
            <div className="slider">
                <ul>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="..."/>
                                <div>
                                    <h3> Rita Soares</h3>
                                    <span> Analista de Cibersegurança</span>
                                </div>
                            </div>
                            <p>"Sempre tive interesse em cibersegurança, mas não sabia por onde começar. 
                                No CINEL, encontrei um curso estruturado e atualizado com as exigências do mercado. Hoje, trabalho na área e recomendo a formação a todos!"</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="..."/>
                                <div>
                                    <h3>Pedro Almeida</h3>
                                    <span>Técnico de Eletrónica</span>
                                </div>
                            </div>
                            <p>"A formação no CINEL foi essencial para a minha evolução profissional. 
                                Os laboratórios bem equipados e o apoio dos formadores fizeram toda a diferença. Sinto-me preparado para enfrentar os desafios do mercado"</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="..."/>
                                <div>
                                    <h3>Sara Costa</h3>
                                    <span>Diretora de Recursos Humanos, Tech Solutions</span>
                                </div>
                            </div>
                                <p>"O CINEL tem sido um parceiro valioso na formação de profissionais qualificados. 
                                    Muitos dos nossos colaboradores passaram pelos cursos e destacam-se pelo conhecimento técnico e pela preparação prática."</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="..."/>
                                <div>
                                    <h3>André Martins</h3>
                                    <span>Desenvolvedor Júnior</span>
                                </div>
                            </div>
                                <p>"O curso de programação no CINEL foi um divisor de águas na minha carreira. 
                                    A metodologia prática e os formadores experientes ajudaram-me a ganhar confiança e a conquistar o meu primeiro emprego na área."</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    );
}

export default Testemonials