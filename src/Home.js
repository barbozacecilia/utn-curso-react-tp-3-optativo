import React, {Component} from "react";
import './HomeStyles.css';
import ProductDetails from "./Item";

class Home extends Component {
  render () {
    return(
        <div className="mainContainer">
        <h1 >Material didáctico</h1>
          <div className="paragraph">
            <p> Juego para horas libres </p>
          </div>
          <ProductDetails/>
        </div>
    )
  }

}
export default Home;
