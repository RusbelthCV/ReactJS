import React from 'react';


class Capital extends React.Component {

    render() {
        const firstLetter = {
            fontSize: "200px",
            lineHeight: "200px",
            margin: "0"
        };
        const completeCapital = {
            fontSize: "30px",
            margin: "0"
        };
        let capital = this.props.nom;
        let primeraLetra = capital[0].toUpperCase();
        return (
            <div>
                <p style={firstLetter}>{primeraLetra}</p>
                <p style={completeCapital}>{this.props.nom}</p>
            </div>
        );
    }
}

export default Capital;