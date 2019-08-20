import React from 'react';

class Moto extends React.Component {
    render() {
        return (
            <div className="row my-2">
                <div className="col-12">
                    <h1>{this.props.marca}</h1>
                </div>
                <div className="row my-2 col-12">
                    <img src={this.props.imagen} className="img-fluid" />
                </div>
                <div className="row my-2 col-12">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
            </div>

        );
    }
}
export default Moto;