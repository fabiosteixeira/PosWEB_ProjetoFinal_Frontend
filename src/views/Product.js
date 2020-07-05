import React, {useState, useEffect} from 'react';
import { Products } from "../api/Products";
import { bindActionCreators } from 'redux';
import { addProduct, removeProduct } from '../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

function ProductView (props) {

    const [id] = useState(...props.match.params.id);
    const [product, setProduct] = useState();
    const [redirect, setRedirect] = useState(false);

    function addCart(e){

        var findProduct = props.product.filter(item => item.id === product.id);
        if(findProduct.length === 0){
            product.quantity = 1;
            props.addProduct(product);
        }
        else
        {
            props.removeProduct(product);
            product.quantity = findProduct[0].quantity + 1;
            props.addProduct(product);
        }

        setRedirect(true);
    }

    useEffect(() => {
        
        const LoadProduct = async () => {
            setProduct();

            Products.getProductById(id).then(
                result => {
                    setProduct(result);
                    console.log("Produto com Id = " + result.id + " foi carregado com sucesso da API!")
                }
            )
        }
        
        LoadProduct();
    }, [id]);

    if (redirect) {
        return <Redirect to='/cart'/>;
    }
    else return (
            <div>
                <h1 className="titleProducts">Informações do Produto</h1>
                {product && (
                    <div className="product">
                        <img className="imageProduct" src={require(`../assets/images/${product.image}`)} alt="N/A" />

                        <div className="productDetails"> 
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <p className="productPrice">$ {product.price}</p>
                            
                            <button className="addCart" onClick={ event => addCart(event)}>Adicionar ao carrinho</button>
                        </div>
                    </div>
                )}

                <style jsx>{`
                    .titleProducts {
                        text-align: center;
                    }
                    .product {
                        margin: 25px;
                    }
                    .imageProduct {
                        float: left;
                        padding-right: 50px;
                    }
                    .productDetails {
                        text-align: justify;
                        text-justify: inter-word;
                    }
                    .productPrice {
                        font-weight: bold;
                        font-size: 18px;
                    }
                    .addCart {
                        background: orangered;
                        font-size: 20x;
                        color: black;
                        padding: 8px;
                        font-weight:bold;
                        text-transform: uppercase;
                        border: 1px solid black;
                    }
                `}</style>
            </div>
        )
}

const mapStateToProps = store => ({
    product: store.cartState.product
  });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addProduct, removeProduct }, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProductView);