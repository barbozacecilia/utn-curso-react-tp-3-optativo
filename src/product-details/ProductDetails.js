import React, {Component} from "react";
import './ProductDetailsStyles.css';
import images from "../assets/images";


class ProductDetails extends Component{
    render() {
        return (
            /*Fragments let you group a list of children without adding extra nodes to the DOM. <React.Fragment> or the shorter syntax you can use for declaring fragments is <> and </> . It doesn't support keys or attributes*/
            <>
                <div className="productDetails">
                        <div className="info">
                            <h2> Nombre: Clue</h2>
                            <li>Descripción del producto: Este es un juego de mesa en donde por medio de pistas deberán descubrir a personalidades destacadas de la historia</li>
                            <li>Precio: $2500</li>
                            <li>SKU|0301-456 </li>
                            <li>Cantidad disponible: 500 </li>
                        </div>
                        <img  src={images.imagen1} alt="imagen de juego"  />
                </div>
            </>
        )
    }
}

export default ProductDetails;
