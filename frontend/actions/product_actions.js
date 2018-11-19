import * as APIUtil from "../util/product_api_util";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const RECEIVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS";

export const receiveProducts = (products) => {
  return {
    type: RECEIVE_PRODUCTS,
    products
  };
};
export const receiveProduct = (product) => {
  return {
    type: RECEIVE_PRODUCT,
    product
  };
};

export const removeProduct = (id) => {
  return {
    type: REMOVE_PRODUCT,
    id
  };
};

const receiveProductErrors = (errors) =>({
    type: RECEIVE_PRODUCT_ERRORS,
    errors
});

export const fetchProducts = () => dispatch => {
  return APIUtil.fetchProducts().then(
    products => dispatch(receiveProducts(products)),
    err => dispatch(receiveProductErrors(err.responseJSON))
  );
};

export const fetchProduct = (id) => dispatch => {
  return APIUtil.fetchProduct(id).then(
    product => dispatch(receiveProduct(product)),
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
