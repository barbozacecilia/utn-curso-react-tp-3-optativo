import React, {Component} from "react";
import './ItemStyles.css';

class ProductDetails extends Component{
    render() {
        return (
                <div className="productDetails">
                    <h2> Nombre: Clue</h2>
                    <div className="paragraph2">
                    <p>Descripción del producto: Este es un juego de mesa en donde por medio de pistas deberán descubrir a personalidades destacadas de la historia</p>
                    <p>Precio: $2500</p>
                    <p>SKU|0301-456 </p>
                    <p>Cantidad disponible: 500 </p>
                    </div>
                </div>
        )
    }
}

export default ProductDetails;
