import React from 'react';

class FotoBola extends React.Component{

    render()
    {
        const pictureStyle = {
            height: "200px",
            width: "200px",
            borderRadius: "100px"

        };
        return(
            <>
                <img src = {this.props.src} style = {pictureStyle}/>
            </>
        );
    }
}

export default FotoBola;