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

export const removeCartProduct = (id) => {
  return {
    type: REMOVE__CART_PRODUCT,
    id
  };
};

xport const receiveCartProductErrors = (errors) =>({
    type: RECEIVE_CART_PRODUCT_ERRORS,
    errors
});

export const clearCartProductErrors = () => ({
  type: CLEAR_CART_PRODUCT_ERRORS
});


export const fetchCartProducts = (cart) => dispatch => {
  return APIUtil.fetchCartProducts(cart).then(
    cartProducts => dispatch(receiveCartProducts(cart_products)),
    err => dispatch(receiveCartProductErrors(err.responseJSON))
  );
};

export const fetchProduct = (cartProduct) => dispatch => {
  return APIUtil.fetchCartProduct(cartProduct).then(
    cartProduct => dispatch(receiveCartProduct(cartProduct)),
    error => dispatch(receiveCartProductErrors(error.responseJSON))
  );
};

export const createCartProduct = (cartProduct) => dispatch => {
  return API.createCartProduct(cartProduct).then(
    createdCartProduct => dispatch(receiveCartProduct(createdCartProduct)),
    error => dispatch(receiveCartProductErrors(error.responseJSON))
  );
};

export const updateCartProduct = (cartProduct) => dispatch => {
  return API.updateCartProduct(cartProduct).then(
    updatedCartProduct => dispatch(receiveCartProduct(updatedCartProduct)),
    error => dispatch(receiveCartProductErrors(error.responseJSON))
  );
};

export const deleteCartProduct = (cartProductId) => dispatch => {
  return API.deleteCartProduct(productId).then(
    cartProduct => dispatch(removeCartProduct(cartProductId)),
    error => dispatch(receiveCartProductErrors(error.responseJSON))
  );
};
