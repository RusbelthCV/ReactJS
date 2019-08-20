import React from 'react';


class Tricolor extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            color: 0
        };
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor() {
        console.log(this.state.color);
        let newColor = this.state.color;
        if(this.state.color < 4){
            newColor ++;
        }
        else{
            newColor = 0;
        }
        this.setState({
            color: newColor
        }); 
    }

render() {
    let colorN;
    if(this.state.color == 0)
    {
        colorN = "gray";
    }
    else if(this.state.color == 1)
    {
        colorN = "red";
    }
    else if(this.state.color == 2)
    {
        colorN = "green";
    }
    else if(this.state.color == 3)
    {
        colorN = "blue";
    }
    let divStyle = {
        height: "50px",
        width: "50px",
        borderRadius: "100px",
        backgroundColor: colorN
    };

    return (
        <div style={divStyle} onClick={this.changeColor}></div>
    );

}
}



export default Tricolor;