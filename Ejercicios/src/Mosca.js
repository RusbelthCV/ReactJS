import React from 'react';


class Mosca extends React.Component {

    
    render() {
        let talla = "40px";    
        return(
            <i className="fa fa-bug" aria-hidden="true" style = {{"position":"absolute","top":"0","right":"0","color":this.props.color,"margin":"10px","height":talla,"width":talla}}></i>
        );
    }
}

export default Mosca;