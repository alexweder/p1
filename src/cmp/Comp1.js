import React from 'react';

function Comp1() {
  return (
    <div className='contenedor'>
      <img className='imagen' 
      src={require('../imagenes/img1.png')}
      alt='imagen1'/>
      <div className='contenedortexto'>
        <p className='nombre'> Titulo</p>
        <p className='subtitulo'> Subtitulo</p>
        <p className='parrafo'> Texto texto texto texto texto texto texto texto texto texto texto texto</p>
      </div>
    </div>
  );
}

export default Comp1;