import * as ApiUtil from '../util/cart_product_api_util';

export const RECEIVE_CART_PRODUCT = 'RECEIVE_CART_PRODUCT';
export const REMOVE_CART_PRODUCT = 'REMOVE_CART_PRODUCT';


export const receiveCartProducts = (cart_products) => {
  return {
    type: RECEIVE_CART_PRODUCTS,
    products
  };
};

export const receiveCartProduct = (cart_product) => {
  return {
    type: RECEIVE_CART_PRODUCT,
    product
  };
};
