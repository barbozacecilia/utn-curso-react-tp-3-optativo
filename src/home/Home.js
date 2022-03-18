import React, {Component} from "react";
import './HomeStyles.css';
import ProductDetails from "../product-details/ProductDetails";

class Home extends Component {
  render () {
    return(
        <div className="mainContainer">
        <h1 >Juegos</h1>
          <ProductDetails/>
        </div>
    )
  }

}
export default Home;
