import React from "react";
import '../hojas-de-estilos/Testimonio.css';


function Testimonio(props){
  return(
    <div className='contenedor-testimonio'>
      <img
      className="image-testimonio"
      src={require(`../imagenes/objeto-${props.imagen}.jpg`)}
      alt="Foto de objeto-1"/>

      <div className="contenedor-texto-testimonio">
        
        <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className="texto.testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );   
}
export default Testimonio;