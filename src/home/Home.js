import React, {Component} from "react";
import './HomeStyles.css';
import ProductDetails from "../product-details/ProductDetails";

class Home extends Component {
  render () {

    return(
        <div className="mainContainer">
            <hr/>
            <h1 >Ropa</h1>
            <ProductDetails/>
            <hr/>
        </div>
    )
  }

}
export default Home;
