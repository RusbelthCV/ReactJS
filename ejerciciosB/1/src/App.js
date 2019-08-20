import React from "react";
import Menu from './Menu';
import Moto from './Moto';

import foto_ducati from './img/ducati.png';
import foto_triumph from './img/triumph.png';
import foto_royal from './img/royal.png';

import 'bootstrap/dist/css/bootstrap.css';


class App extends React.Component {
  render() {
    return (
      <div className="container mt-3" >
        <Menu />
        <Moto marca = "Ducati" imagen = {foto_ducati} />
        <Moto marca = "Triumph" imagen = {foto_triumph} />
        <Moto marca = "Royal" imagen = {foto_royal} />
      </div >
    );

  }
}
export default App;