import React, { Component } from 'react'

class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    

    render() {
        return (
            <div style={{ height: "40px", width: "40px", position: "absolute", top: "10%", left: "5%" }}>
                <img style={{width:"15px"}} src={this.props.info.image} alt="" />
                <h2>{this.props.info.name}</h2>
            </div>
        )
    }
}

export default Popup
