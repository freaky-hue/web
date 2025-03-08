//imports da pasta de componentes + frameworks
import Navbar from "./componentes/Navbar/Navbar"
import Hero from "./componentes/Hero/Hero"
import Programs from "./componentes/Programs/Programs"
import Title from "./componentes/Tittle/Title"
import About from "./componentes/About/About"
import Gallery from "./componentes/Gallery/Gallery"
import Contact from "./componentes/Contact/Contact"
import React from "react"


//Aqui está defenido o 'coração' da página, tudo que é feito depois é importado e aplicado aqui
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle = "Os nossos Programas" title="O que temos a oferecer"/>
        <Programs/>
        <About/>
        <Title subTitle = "Galeria" title="Fotos do Cinel"/>
        <Gallery/>
        <Title subTitle="Contacta-nos" title="Entre em contacto"/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
