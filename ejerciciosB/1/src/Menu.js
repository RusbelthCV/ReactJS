import React from 'react';

class Menu extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 d-flex justify-content-end">
                    <ul className="list-inline">
                        <li className="list-inline-item mx-2">Ducati</li>
                        <li className="list-inline-item mx-2">Triumph</li>
                        <li className="list-inline-item mx-2">Royal Enfield</li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Menu;