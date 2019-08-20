import React from 'react';
import { timingSafeEqual } from 'crypto';

class Hola extends React.Component{
    render()
    {
        return(
            <h1 style = {{position: "relative", top:this.props.x,left:this.props.y}}>Hola Mundo!</h1>
        );
    }
}
export default Hola;