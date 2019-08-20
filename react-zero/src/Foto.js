import React from 'react';

class Foto extends React.Component{
    render(){
        let anchoFoto = this.props.ancho;
        let alturaFoto = this.props.alto;
        let imagen = `https://placekitten.com/${anchoFoto}/${alturaFoto}`;
        return(
            <img src = {"https://placekitten.com/"+anchoFoto+"/"+alturaFoto}/>
        );
    }
}
export default Foto;