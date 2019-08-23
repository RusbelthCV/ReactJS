import React from "react";
import 'bootstrap/dist/css/bootstrap';


import Tasca from './Tasca';
import Tasques from './Tasques';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tarea: [],
      inputVal: "",
      color: "alert alert-primary"
    };
    this.enviar = this.enviar.bind(this);
    this.canviarColor = this.canviarColor.bind(this);
  }
  enviar(texto) {
    //Insertar texto
    e.preventDefault();
    let array = [...this.state.tarea];
    array.push(texto);
    inputValue = "";
    this.setState({
      tarea: array,
      inputVal: inputValue
    });

  }
  canviarColor(e){
    console.log("Color: "+e.target.value);
    this.setState({
      color: e.target.value
    });
  }
  render() {
    return (
      <div className="container d-inline-flex mt-3">
        <Tasca enviar={this.enviar} input = {this.state.inputVal} select = {this.canviarColor}/>
        <Tasques tarea = {this.state.tarea}/>
      </div>
    );
  }
}

export default App;