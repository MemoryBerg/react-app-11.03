import React from "react";

class Basket extends React.Component{

    render() {
        return(
            <header className={'basket'}>
                {/*<h3>Basket</h3>*/}
                <p>Items: {this.props.items}</p>
                {/*<p>Total price: {this.props.totalPrice} $</p>*/}
            </header>
        )
    }
}

export default Basket
