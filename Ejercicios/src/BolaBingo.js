import React from 'react';

class BolaBingo extends React.Component{
    render(){
        const styleBola = {
            height: "80px",
            width: "80px",
            backgroundColor: "#ff0000",
            fontSize: "40px",
            color: "white",
            borderRadius: "100px",
            lineHeight: "80px"
        };
        return(
            <div className = "text-center" style = {styleBola}>
                {this.props.num}
            </div>
        );
    }
}

export default BolaBingo;