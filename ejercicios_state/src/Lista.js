import React from 'react';

class Lista extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ciudades: this.props.items,
            ciudadesFiltradas: this.props.items
        };
    }
    render() {
        console.log(this.state.ciudades);
        let array = this.props.items;
        const content = array.map((valor) => <tr key={valor}>
            <td>
                {valor}
            </td>
        </tr>)
        return (
            <div className="table-responsive">
                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <td>Ciudad</td>
                        </tr>
                    </thead>
                    <tbody>
                        {content}
                    </tbody>
                </table>
            </div>
            <div className="input-group">
                <div className="input-group-prepend">
                    <label className="input-group-text">Buscar</label>
                </div>
                <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"></input>
            </div>
        );
    }
}




export default Lista;