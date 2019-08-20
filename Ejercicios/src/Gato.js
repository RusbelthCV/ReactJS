import React from 'react';

class Gato extends React.Component{
    
    render(){
        const marginLeft = {
            marginLeft:  "70px"

        };
        return(
            <div>
                <img className = "img-fluid" src = {`https://placekitten.com/${this.props.alto}/${this.props.ancho}`}/>
                <p style ={marginLeft}>{this.props.nombre}</p>
            </div>
        );
    }
}

export default Gato;