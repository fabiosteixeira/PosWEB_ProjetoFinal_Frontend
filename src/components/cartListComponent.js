import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addProduct, removeProduct } from '../actions';
import { CartItem } from './cartItemComponent';

function CartListComponent(props){

    const [items, setItems] = useState(props.product);
    const [totalPrice, setTotalPrice] = useState(0.00);
    
    useEffect(() => {
        setItems(props.product);    
        
        let sum = 0.00;
        props.product.map(product => sum = sum + (parseFloat(product.price) * product.quantity));
        setTotalPrice(sum.toFixed(2));

    }, [props.product]);  

    const handleOnRemoveProduct = (product, event) => {
        props.removeProduct(product);
    }

    return (
        <div>
            {items.length === 0 ? <p className="emptyCart">Carrinho Vazio</p> :
            items.map(product => 
                <div className="itemCart">
                    <CartItem
                    onRemoveProduct={handleOnRemoveProduct}
                    {...product} />
                </div>
            )}
            <p className="totalPrice">Preço total: ${totalPrice}</p>

            <style jsx>{`
                .emptyCart {
                    font-size: 20px;
                    padding: 10px;
                    font-weight: bold;
                    border: 1px solid black;
                }
                .itemCart {
                    border: 1px solid black;
                    clear: both;
                }
                .totalPrice {
                    clear: both;
                    float: right;
                    margin-right: 50px;
                    font-weight: bold;
                    font-size: 28px;
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
  
  export const CartList = connect(mapStateToProps, mapDispatchToProps)(CartListComponent)
