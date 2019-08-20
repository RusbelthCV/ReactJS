import React from "react";
import 'bootstrap/dist/css/bootstrap';


import Tricolor from './Tricolor';
import Desplegable from './Desplegable';
import Lista from './Lista';
import {CIUTATS} from './datos';

class App extends React.Component{
  render(){
    return(
      <div className = "container mt-5">
        <Tricolor />
        <Desplegable />
        <Lista items = {CIUTATS}/>
      </div>
    );
  }
}


export default App;