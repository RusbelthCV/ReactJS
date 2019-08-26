import React from 'react';

class Tareas extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tarea: this.props.tareas,
            color: this.props.color
        }
    }
    render(){
        const tareas = (this.props.tareas).map((valor) => <div className = {this.state.color+" alert-dismissible fade show"} key = {valor}>
        {valor}
        <button type="button" className = "close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>)
        return(
            <div className = "col-6 border-left pl-3">
                <h3>Tasques</h3>
                {tareas}
            </div>
        );
    }
}

export default Tareas;