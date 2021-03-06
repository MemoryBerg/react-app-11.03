import React, {Component} from 'react';
import Goods from "./Components/goods";
import Basket from "./Components/basket";
import Header from "./Components/header";
import Footer from "./Components/footer";


let prods = [];
let price;
let totalPrice = 0;

class App extends Component{

  state = {
    products: [
      {id: 1, name: 'product1', price: 10},
      {id: 2, name: 'product2', price: 5},
      {id: 3, name: 'product3', price: 2},
      {id: 4, name: 'product4', price: 7},
      {id: 5, name: 'product5', price: 4},
      {id: 6, name: 'product6', price: 8},
    ],
      basket: [],
  };

    addToBasket(prod) {
        let itemsCount = document.getElementById(prod.id);
        for (let i = 0; i < itemsCount.value; i++) {
            prods.push(prod);
        }
        price = prod.price * itemsCount.value;
        this.setState({basket: prods});
        totalPrice = totalPrice + price;
    }

  render() {
      let goods = this.state.products.map((product) => {
        return (
          <div>
          <Goods
            id={product.id}
            name={product.name}
            price={product.price}
            onAddProduct={this.addToBasket.bind(this, product)}
          />
          </div>
        )
    });

    return(
        <div style={{padding: '10px'}}>
            <Header
                items={this.state.basket.length}
                totalPrice={totalPrice}
            />
            <div className={"Goods"}>
                {goods}
            </div>
            <Footer
                items={'(' + this.state.basket.length + ')'}
            />
        </div>

    )
  };
}

export default App;
