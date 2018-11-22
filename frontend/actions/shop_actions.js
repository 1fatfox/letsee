import * as APIUtil from "../util/shop_api_util";
export const RECEIVE_SHOP = "RECEIVE_SHOP";
export const RECEIVE_SHOPS = "RECEIVE_SHOPS";
export const RECEIVE_SHOP_ERRORS = "RECEIVE_SHOP_ERRORS";

export const receiveShop = (shop) => {
  return {
    type: RECEIVE_SHOP,
    shop
  };
};

export const receiveShops = (shops) => {
  return {
    type: RECEIVE_SHOPS,
    shops
  };
};


const receiveShopErrors = (errors) =>({
    type: RECEIVE_SHOP_ERRORS,
    errors
});

export const fetchShops = () => dispatch => {
  return (
    APIUtil.fetchShops().then(
    shops => dispatch(receiveShops(shops)),
    err => dispatch(receiveShopErrors(err.responseJSON))
  ));
};

export const fetchShop = (id) => dispatch => {
  return APIUtil.fetchShop(id).then(
    shop => dispatch(receiveShop(shop)),
    error => dispatch(receiveShopErrors(error.responseJSON))
  );
};


export const createShop = (shop) => dispatch => {
  return APIUtil.createShop(shop).then(
    createdShop => dispatch(receiveShop(createdShop)),
    error => dispatch(receiveShopErrors(error.responseJSON))
  );
};


export const updateShop = (shop) => dispatch => {
  return APIUtil.updateShop(shop).then(
    updatedShop => dispatch(receiveShop(updatedShop)),
    error => dispatch(receiveShopErrors(error.responseJSON))
  );
};
