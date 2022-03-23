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
                        name: "Remera color negra",
                        description: "100% algodón",
                        code: "1212",
                        quantity: " 5",
                        precio: '4500',
                    },
                    {
                        imagen: images.imagen2,
                        name: "Camiseta",
                        description: "Color beige con un hombro descubierto",
                        code: "12313",
                        quantity: "50",
                        precio: '4800',
                    },
                    {
                        imagen: images.imagen3,
                        name: "Saco",
                        description: "Material natural",
                        code: "1233",
                        quantity: "25",
                        precio: '4154',
                    },
                    {
                        imagen: images.imagen4,
                        name: "Remera blanca",
                        description: "Material natural",
                        code: "1233",
                        quantity: "10",
                        precio: '4154',
                    },
                    {
                        imagen: images.imagen5,
                        name: "Pantalón",
                        description: "Pantalón clásico",
                        code: "1212",
                        quantity: "6",
                        precio: '4500',
                    },
                    {
                        imagen: images.imagen6,
                        name: "Campera",
                        description: "Campera marrón",
                        code: "12313",
                        quantity: "12",
                        precio: '4800',
                    },
                ]
            }
        }
        promoClick =()=> {
            this.setState( ()=>({
            listProducts: [
                    {
                        imagen: images.imagen6,
                        description: "Campera marrón",
                        code: "12313",
                        quantity: "12",
                        precio: '4800',
                    },
                    {
                        imagen: images.imagen5,
                        name: "Pantalón",
                        description: "Pantalón clásico",
                        code: "1212",
                        quantity: "6",
                        precio: '4500',
                    }
                ]}
            ))
        }


    render() {
        return (
            /*Fragments let you group a list of children without adding extra nodes to the DOM. <React.Fragment> or the shorter syntax you can use for declaring fragments is <> and </> . It doesn't support keys or attributes*/
            <>
                <div className="mainContainerProducts">
                    <h2> Colección otoño</h2>
                    <button onClick={this.promoClick}>Productos en Promoción</button>
                    <button onClick={this.state.listProducts} >Ver todos los productos</button>
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
