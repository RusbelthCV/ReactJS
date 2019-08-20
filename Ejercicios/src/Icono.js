import React from 'react';

class Icono extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            alerta: false
        };
        this.cambiar = this.cambiar.bind(this);
    }

    cambiar(){
        this.setState({
            alerta: !this.state.alerta
        });
    }

    render() {
        const theClass = ( this.state.alerta==true) ? this.props.icon1 : this.props.icon2;
        theClass = "fa "+theClass;
        return (
            <i className={theClass} onClick={this.cambiar} aria-hidden="true" ></i>
        );
    }

    

}


export default Icono;