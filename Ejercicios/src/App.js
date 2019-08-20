import React from "react";
import 'bootstrap/dist/css/bootstrap';

import Titulo from './Titulo';
import Bola from './Bola';
import Cuadrado from './Cuadrado';
import Mosca from './Mosca';
import Capital from './Capital';
import Gato from './Gato';
import BolaBingo from './BolaBingo';
import FotoBola from './FotoBola';
import Marco from './Marco';
import Icono from './Icono';

class App extends React.Component{
  render()
  {
    return(
      <div className = "container mt-5">
        <Titulo texto = "Hola React!" />
        <Bola talla="80px" margen="10px" fondo="#ff0000" />
        <Cuadrado talla="70px" margen="8px" grosor="5px" color="red" />
        <Mosca color="blue"  />
        <Capital nom = "barcelona" />
        <Gato ancho="200" alto="200" nombre="Garfield" />
        <BolaBingo num="22" />
        <FotoBola src="http://lorempixel.com/200/200" talla="200" />
        <Marco src="http://lorempixel.com/200/300" borde="10" color="brown" fondo="beige" />
        <Icono icon1="fa-thumbs-up" icon2="fa-thumbs-down"/>
      </div>
    );
  }
}

export default App;