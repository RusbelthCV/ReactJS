import React from "react";
import 'bootstrap/dist/css/bootstrap';

import Calculadora from './Calculadora';

export default class App extends React.Component{
  render(){
    return(
      <div className = "container my-3">
        <Calculadora />
      </div>
    )
  }
};