import React from "react";
import Basket from "./basket";

class Header extends React.Component {
    render() {
        return(
            <header
            style={{border: '2px solid lightgrey'}}>
                <div>
                    <h3>Basket</h3>
                    <p
                    style={{display: 'inline-block', marginRight: '10px', fontSize: '18px'}}>
                        Items: </p>
                    <Basket
                        items={this.props.items}/>
                        <p
                        style={{fontSize: '20px', fontWeight: 600}}>Total price: {this.props.totalPrice} $</p>
                </div>
            </header>
        )
    }
}

export default Header
