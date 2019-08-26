import React from "react";
import 'bootstrap/dist/css/bootstrap';

import Formulario from './Formulario';
import Tareas from './Tareas';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tarea: [],
      color: ""
    };
    this.nuevaTarea = this.nuevaTarea.bind(this);
    this.nuevoColor = this.nuevoColor.bind(this);
  }
  nuevoColor(color){
    this.setState({
      color: color
    });
  }
  nuevaTarea(texto){
    let arrayTareas = [...this.state.tarea];
    arrayTareas.push(texto);
    this.setState({
      tarea: arrayTareas,
      color: "alert "
    });
  }
  render() {
   
    return (
      <div className="container mt-5">
        <div className="row">
          <Formulario enviar = {this.nuevaTarea} selectChange = {this.nuevoColor} />
          <Tareas tareas = {this.state.tarea} color = {this.state.color}/>
        </div>
      </div>
    )
  }
}

export default App;