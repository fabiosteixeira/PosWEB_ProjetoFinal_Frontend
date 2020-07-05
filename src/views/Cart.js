import React from "react";
import { CartList } from "../components/cartListComponent";

export default () => 
<div>
    <h1 className="titleCart">Meu carrinho de produtos</h1>

    <CartList />

    <style jsx>{`
        .titleCart {
          text-align: center;
        }
    `}</style>
</div>;
