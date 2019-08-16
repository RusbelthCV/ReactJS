import React from 'react';


class Bola extends React.Component{

    render()
    {
        return(
            <div style = {{"height":this.props.talla,"width":this.props.talla,"backgroundColor":this.props.fondo,"borderRadius":"100px"}}></div>
        );
    }
}

export default Bola;