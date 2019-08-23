import React from 'react';
import './css/tasca.css';


export default class Tasca extends React.Component {
    constructor() {
        super();
        this.state = {
            val: ""
        };
        this.input = this.input.bind(this);
    }
    input(e) {
        let text = e.target.value;

        this.setState({
            val: text
        });
    }
    render() {
        return (
            <div className="border-3 pr-2">
                <form onSubmit={()=>this.props.enviar(this.state.val)}>
                    <div className="form-group">
                        <label>Tasca</label>
                        <input className="form-control" type="text" name="tasca" onChange={this.input} value={this.state.val}></input>
                    </div>
                    <button type="submit" className="btn btn-primary" >Enviar</button>
                    <div className="form-group mt-3">
                        <select className="custom-select" onChange = {this.props.select}>
                            <option value="alert alert-primary">Trabajo</option>
                            <option value="alert alert-success">Personal</option>
                            <option value="alert alert-danger">Urgente</option>
                            <option value="alert alert-warning">Familia</option>
                        </select>
                    </div>
                </form>
            </div>

        );
    }
}