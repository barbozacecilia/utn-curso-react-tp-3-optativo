import React, {Component} from "react";
import './ProductStyles.css';
import images from "../../assets/images";



class Product extends Component {
    render(){
        console.log('props',this.props)

        return(
            <>
                <div className="info">
                    <div className="imgContainer">
                        <img className="productImage" src={this.props.imagen} alt="imagen de juego"  />
                    </div>
                    <h2>{this.props.name}</h2>
                    <li>{this.props.description || ""}</li>
                    <li>{'Precio: $ '+ this.props.precio}</li>
                    <li>{'Código: ' + this.props.code}</li>
                    <li>{ 'Cantidad: ' + this.props.quantity}</li>
                </div>
            </>
        )
    }
}


export default Product;
