import React from 'react';

class Lista extends React.Component{
    render(){
        let lis = this.props.array.map(el => <li key = {el}>{el}</li>);
        return(
            <ul>
                {lis}
            </ul>
        );
    }
}
export default Lista;