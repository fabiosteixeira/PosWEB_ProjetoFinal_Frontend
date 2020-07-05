import { ADD_PRODUCT, REMOVE_PRODUCT } from '../actions/actionTypes';

const initialState = {
    product: []
  };

  export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_PRODUCT:
        console.log("Adicionou ao carrinho o Produto de id = " + action.product.id);
        //alert(JSON.stringify(state.product))
        //alert(JSON.stringify(action.product))
        return {
          ...state,
          product: [...state.product, action.product] 
        };
      case REMOVE_PRODUCT:
          console.log("Removeu do carrinho o Produto de id = " + action.product.id);
        return {
          ...state,
          product: state.product.filter(prod => prod.id !== action.product.id)
        };
      default:
        return state;
    }
  };