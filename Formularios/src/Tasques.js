import React from 'react';

class Tasques extends React.Component {
    constructor(props) {
        super(props);
        this.spanDato = React.createRef();
        this.state = {
            tareas: this.props.tarea
        };
        this.borrarElemento = this.borrarElemento.bind(this);
    }
    borrarElemento(e){
        let padre = (e.target).parentNode;
        let valorArray = padre.previousSibling.innerHTML;
        let array = this.state.tareas;
        let posElemento = array.indexOf(valorArray);
        if(posElemento > -1){
            array.splice(posElemento,1);
        }
        this.setState({
            tareas: array
        });
    }
    render(){
        let tareas = this.state.tareas;
        const array = tareas.map((valor) => {
            return (<div className={"d-flex justify-content-between "+this.state.color} style  = {{"width":"19vw"}} key = {valor}>
                <span ref = {this.spanDato}>{valor}</span>
                <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick = {this.borrarElemento}>
                    <span aria-hidden="true">&times;</span>
                </button>   
            </div>)
        });
        return (
            <div className = " border-left pl-2">
                <p>Tasques</p>
                <div>
                    {array}
                </div>
            </div>);
    }
    
}

export default Tasques;