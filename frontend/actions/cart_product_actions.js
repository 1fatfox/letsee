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
    err => dispatch(receiveProductErrors(err.responseJSON))
  );
};

export const fetchProduct = (cartProduct) => dispatch => {
  return APIUtil.fetchCartProduct(id).then(
    cartProduct => dispatch(receiveProduct(cartProduct)),
    error => dispatch(receiveProductErrors(error.responseJSON))
  );
};

export const createProduct = (product) => dispatch => {
  return API.createProduct(product).then(
    createdProduct => dispatch(receiveProduct(createdProduct)),
    error => dispatch(receiveProductErrors(error.responseJSON))
  );
};

export const updateProduct = (product) => dispatch => {
  return API.updateProduct(product).then(
    updatedProduct => dispatch(receiveProduct(updatedProduct)),
    error => dispatch(receiveProductErrors(error.responseJSON))
  );
};

export const deleteProduct = (productId) => dispatch => {
  return API.deleteProduct(productId).then(
    product => dispatch(removeProduct(productId)),
    error => dispatch(receiveProductErrors(error.responseJSON))
  );
};
