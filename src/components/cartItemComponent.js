import React from 'react';

export const CartItem = (product) => {
    return (
        <div>
            <img className="productImg" src={require(`../assets/images/${product.image}`)} alt="N/A" />
            <div className="productBasicInfo">
                <p className="important">{product.name}</p>
                <p>Preço Unitário: ${product.price}</p>
            </div>
            <div className="productBasicInfo2">
                <p>Quantidade: {product.quantity}</p>
                <p className="important">Preço Quantidade Total: ${(parseFloat(product.price) * product.quantity).toFixed(2)}</p>
            </div>
            <div className="productBasicInfo">
                <button className="removeCart" onClick={ event => product.onRemoveProduct(product, event)}>Remover do carrinho</button>
            </div>
            <style jsx>{`
                .productImg {
                    height: 100px;
                    width: 100px;
                    float: left;
                    margin: 10px;
                }
                .productBasicInfo {
                    float: left;
                    margin: 10px;
                }
                .productBasicInfo2 {
                    float: left;
                    margin: 10px;
                    margin-left: 50px;
                }
                .important {
                    font-weight: bold;
                }
                .removeCart {
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