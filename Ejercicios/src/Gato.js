import React from 'react';

class Gato extends React.Component{
    
    render(){
        
        return(
            <div className = "text-center">
                <img className = "img-fluid" src = {`https://placekitten.com/${this.props.alto}/${this.props.ancho}`}/>
                <p>{this.props.nombre}</p>
            </div>
        );
    }
}

export default Gato;