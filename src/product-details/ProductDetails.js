import React, {Component} from "react";
import './ProductDetailsStyles.css';
import images from "../assets/images";
import Product from "./component/Product";


class ProductDetails extends Component{
    constructor(props) {
        super(props);
        this.state = {
            listProducts: [
                {
                    imagen: images.imagen1,
                    name: "Remera",
                    description: "100% algodón",
                    code: "1212",
                    quantity: " 510",
                    precio: '4500',
                },
                {
                    imagen: images.imagen2,
                    name: "Pantalón",
                    description: "jean",
                    code: "12313",
                    quantity: "50",
                    precio: '4800',
                },
                {
                    imagen: images.imagen6,
                    name: "Remera 2 ",
                    description: "Material natural",
                    code: "1233",
                    quantity: "40",
                    precio: '4154',
                },
                {
                    imagen: images.imagen7,
                    name: "Remera 2 ",
                    description: "Material natural",
                    code: "1233",
                    quantity: "40",
                    precio: '4154',
                },
                {
                    imagen: images.imagen1,
                    name: "Remera",
                    description: "100% algodón",
                    code: "1212",
                    quantity: " 510",
                    precio: '4500',
                },
                {
                    imagen: images.imagen2,
                    name: "Pantalón",
                    description: "jean",
                    code: "12313",
                    quantity: "50",
                    precio: '4800',
                },
            ]
        }
    }

    render() {

        return (
            /*Fragments let you group a list of children without adding extra nodes to the DOM. <React.Fragment> or the shorter syntax you can use for declaring fragments is <> and </> . It doesn't support keys or attributes*/
            <>
                <div className="mainContainerProducts">
                    <h2> Lista de productos en promoción</h2>
                    <div className={"productsContainer"}>
                {this.state.listProducts.map(listProduct=> (
                        <Product
                        imagen={listProduct.imagen}
                        name={listProduct.name}
                        description={listProduct.description}
                        code={listProduct.code}
                        precio={listProduct.precio}
                        quantity={listProduct.quantity}
                    />
                 )
               )
            }
                    </div>
                </div>
            </>
        )
    }
}

export default ProductDetails;
