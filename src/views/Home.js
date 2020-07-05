import React from "react";
import { ProductsList } from "../components/productsListComponent";
import { ProductErrorHandler } from "../components/ProductErrorHandler";

export const Home = () => 
<div>
    {/* <h1 className="titleProducts">Produtos em destaque</h1>
    <ProductErrorHandler>
      <ProductsList />
    </ProductErrorHandler> */}
    <style jsx>{`
        .titleProducts {
          text-align: center;
        }
    `}</style>
</div>;
