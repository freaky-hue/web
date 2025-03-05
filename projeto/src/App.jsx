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
        <Title subTitle = "OUR PROGRAM" title="What We Have to Offer"/>
        <Programs/>
        <About/>
        <Title subTitle = "Gallery" title="Campus Photos"/>
        <Gallery/>
        <Title subTitle="Contact US" title="Get in Touch"/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
