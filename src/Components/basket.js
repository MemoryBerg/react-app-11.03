import React from "react";

class Basket extends React.Component{

    render() {
        return(
            <div className={'basket'}
                 style={{display: 'inline-block'}}>
                {/*<h3>Basket</h3>*/}
                <p>{this.props.items}</p>
                {/*<p>Total price: {this.props.totalPrice} $</p>*/}
            </div>
        )
    }
}

export default Basket
