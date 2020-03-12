import React from "react";

class Footer extends React.Component {
    render() {
        return(
            <footer>
                <h3>Basket: {this.props.items}</h3>
            </footer>
        )
    }
}

export default Footer
