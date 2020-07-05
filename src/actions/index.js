import { ADD_PRODUCT, REMOVE_PRODUCT } from './actionTypes';

export const addProduct = value => ({
    type: ADD_PRODUCT,
    product: value
  });

  export const removeProduct = value => ({
    type: REMOVE_PRODUCT,
    product: value
  });