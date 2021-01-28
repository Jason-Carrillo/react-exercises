import React, {Component} from "react";

class ValidationComponent extends Component {
    render() {
        return (
            <div>
                <p>{this.props.textLength}</p>
                { this.props.textLength < 5 ?
                    <p>Text too Short</p>
                    :
                    <p>Text Long Enough</p>
                }
            </div>
        );
    }
}

export default ValidationComponent;