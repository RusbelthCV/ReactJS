import React from "react";
import './css/App.css';

/*export default(props) => (
    <>
        <h2>{props.texto}</h2>
        <p className = "saludo">{props.saludo}</p>
    </>
);*/
class Subtitulo extends React.Component {

    render(){
        let nuevoTexto = this.props.texto.toUpperCase();
        return(
            <>
                <h2>{nuevoTexto}</h2>
                <p className = "saludo">{this.props.saludo}</p>
            </>
        );
    }
}
export default Subtitulo;