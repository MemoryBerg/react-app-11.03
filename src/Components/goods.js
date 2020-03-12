import React from "react";

class Goods extends React.Component {

    render() {
        return (
            <div className="product">
                <h3>{this.props.name}</h3>
                <p>Price: {this.props.price} $</p>
                <input
                    id={this.props.id}
                    onChange={this.props.onInputChange}
                    type='number'
                />
                <button
                    className='add-to-basket'
                    onClick={this.props.onAddProduct}
                >Add
                </button>
            </div>
        );
    }
}

export default Goods
