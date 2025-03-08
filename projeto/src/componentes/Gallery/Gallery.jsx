import React from 'react'
import './Gallery.css'
import {Link} from 'react-scroll'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'



function Gallery(){
  return (
    <div className='gallery-cont'>
        <div className="gallery">
            <img src={gallery_1} alt="..."/>
            <img src={gallery_2} alt="..."/>
            <img src={gallery_3} alt="..."/>
            <img src={gallery_4} alt="..."/>
        </div>
        <Link href='https://www.cinel.pt/appv2/Galeria/Fotos'>
          <button className='btn btn-color'>Veja mais aqui <img src={white_arrow} alt="..."></img></button>
        </Link>
    </div>
  )
}

export default Gallery