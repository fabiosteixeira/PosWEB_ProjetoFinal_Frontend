import React, { Component } from "react";

export class ProductErrorHandler extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Não foi possível carregar a lista de produtos</h1>;
    }

    return this.props.children;
  }
}