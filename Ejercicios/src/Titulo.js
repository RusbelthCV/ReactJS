import React from 'react';


class Titulo extends React.Component{

    render()
    {
        return(
            <h1>{this.props.texto}</h1>
        );
    }

}

export default Titulo;