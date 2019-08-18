import React from 'react';

class Marco extends React.Component {

    render() {
        const pictureStyle = {
            borderWidth: "3px",
            borderStyle: "solid",
            borderColor: this.props.color, 
            padding: this.props.borde,
            backgroundColor: this.props.fondo
        };
        return(
            <>  
                <img src = {this.props.src} style = {pictureStyle}/>
            </>
        );
    }
}

export default Marco;