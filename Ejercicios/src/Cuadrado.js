import React from "react";

class Cuadrado extends React.Component{

    render()
    {
        return(
            <div style = {{"height":this.props.talla,"width":this.props.talla,"margin":this.props.margen,"border":this.props.grosor+" solid "+this.props.color}}></div>
        );
    }

}
export default Cuadrado;