import React from "react";
import Titulo from './Titulo';
import Subtitulo from './Subtitulo';
import Lista from './Lista';
import Foto from './Foto';

const Listado = ["uno", "dos", "tres", "cuatro"];
class App extends React.Component {
  render() {
    return (
      <>
        <Lista array = {Listado}/>
        <Titulo>Welcome to React Parcel Micro App!</Titulo>
        <Subtitulo texto="Prueba de texto" />
        <Subtitulo texto="" saludo="Probemos" />
        <p>Hard to get more minimal than this React app.</p>
        <Titulo>PPP</Titulo>
        <Foto ancho="400" alto="200"/>
        <Foto ancho="300" alto="300"/>

      </>
    );
  }
}
export default App;