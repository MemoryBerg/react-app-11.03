import React from "react";
import Basket from "./basket";

class Footer extends React.Component {
    render() {
        return(
            <footer>
                <p
                    style={{display: 'inline-block', marginRight: '10px', fontWeight: 600}}
                >Basket</p>
                <Basket
                    items={this.props.items}
                    style={{fontWeight: 900}}
                />
            </footer>
        )
    }
}

export default Footer;
