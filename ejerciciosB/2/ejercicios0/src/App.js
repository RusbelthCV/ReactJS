import React from "react";
import Hola from './Hola';
import Bola from './Bola';
import Cuadrado from './Cuadrado';
import Separador from './Separador';
import Titulo from './Titulo';

class App extends React.Component {
  render() {
    return (
      <>
        <Hola x="20px" y="50px" />
        <Bola />
        <Cuadrado />
        <Separador />
        <Titulo />
      </>
    );
  }
}
export default App;