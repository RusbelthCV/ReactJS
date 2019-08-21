import React from "react";
import 'bootstrap/dist/css/bootstrap';


import Tricolor from './Tricolor';
import Desplegable from './Desplegable';
import Lista from './Lista';
import {CIUTATS} from './datos';
import {CIUTATS_CAT} from './Datos';
import Lista2 from './Lista2';


class App extends React.Component{
  render(){
    return(
      <div className = "container mt-5">
        <Tricolor />
        <Desplegable />
        <Lista items = {CIUTATS}/>
        <Lista2 items = {CIUTATS_CAT}/>
      </div>
    );
  }
}


export default App;