import React, {Component} from "react";

class CharComponent extends Component {
    render() {
        const style = {
            display: "inline-block",
            padding: "16px",
            textAlign: "center",
            margin: "16px",
            border: "1px solid black"
        }
        return (
            <div>
                <p style={style} onClick={this.props.click}>{this.props.letter} </p>
            </div>
        );
    }
}

export default CharComponent;