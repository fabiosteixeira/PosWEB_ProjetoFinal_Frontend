import React from 'react';
import { Link } from "react-router-dom";

export default (product) => {
    return (
        <div className="productItem">
            <Link className="productLink" to={'products/'+product.id}>
                <img className="productImg" src={require(`../assets/images/${product.image}`)} alt="N/A" />
                <h4 className="productName">{product.name}</h4>
                <h3 className="productPrice">${product.price}</h3>
            </Link>

            <style jsx>{`
                .productItem {
                    border: 1px solid black;
                    border-radius: 10px;
                    padding: 10px;
                    float: left;
                    margin: 10px;
                }
                .productLink {
                    text-decoration: none;
                    text-align: center;
                }
                .productItem:hover {
                    border: 3px solid black;
                    background: lightcyan;
                    margin: 8px;
                }
                .productImg {
                    height: 200px;
                    width: 200px;
                }
                .productName {
                    background: orangered;
                    color: black;
                }
                .productPrice {
                    font-weight:bold;
                    margin-top: -10px;
                    text-decoration: none;
                    color: black;
                }
            `}</style>
        </div>
    )
}