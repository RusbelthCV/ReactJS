import React from 'react';

import fotoBici from './img/bicicleta.png';
import fotoCoche from './img/coche.png';
import fotoBus from './img/bus.png';
import fotoMoto from './img/moto.png';

class Desplegable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            element: fotoBici
        };
        this.changeImage = this.changeImage.bind(this);
    }

    changeImage(e) {
        let image = e.target.value;
        let newImage = this.state.element;
        switch (image) {
            case "bicicleta":
                newImage = fotoBici;
                break;
            case "moto":
                newImage = fotoMoto;
                break;
            case "bus":
                newImage = fotoBus;
                break;
            case "coche":
                newImage = fotoCoche;
                break;
        }
        this.setState({
            element: newImage
        });

    }

    render() {

        return (
            <div className="input-group">
                <div className="input-group-prepend">
                    <label className="input-group-text" >Options</label>
                </div>
                <select className="custom-select" id="options" onChange={this.changeImage}>
                    <option value="bicicleta">bici</option>
                    <option value="coche">coche</option>
                    <option value="moto">moto</option>
                    <option value="bus">bus</option>
                </select>
                <div>
                    <img src={this.state.element} className="img-thumbnail" />
                </div>
            </div>
        );
    }
}





export default Desplegable;