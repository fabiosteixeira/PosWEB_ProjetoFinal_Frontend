import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import { Home, About } from "./views";
const Product = lazy(() => import("./views/Product"));
const Cart = lazy(() => import("./views/Cart"));

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={Home} />
    {/* <Suspense fallback={<h1>Carregando produto...</h1>}>
        <Route path="/products/:id" component={Product} />
    </Suspense>
    <Suspense fallback={<h1>Carregando carrinho de compras...</h1>}>
        <Route path="/cart/" exact component={Cart} />
    </Suspense> */}
    <Route path="/about/" exact component={About} />
  </>
);
