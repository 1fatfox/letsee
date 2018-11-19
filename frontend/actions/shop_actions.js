import * as APIUtil from "../util/shop_api_util";
export const RECEIVE_SHOP = "RECEIVE_SHOP";
export const RECEIVE_SHOP_ERRORS = "RECEIVE_SHOP_ERRORS";

export const receiveShop = (shop) => {
  return {
    type: RECEIVE_SHOP,
    shop
  };
};

const receiveShopErrors = (errors) =>({
    type: RECEIVE_SHOP_ERRORS,
    errors
});


export const createShop = (shop) => dispatch => {
  return API.createShop(shop).then(
    createdShop => dispatch(receiveShop(createdShop)),
    error => dispatch(receiveShopErrors(error.responseJSON))
  );
};


export const updateShop = (shop) => dispatch => {
  return API.updateShop(shop).then(
    updatedShop => dispatch(receiveShop(updatedShop)),
    error => dispatch(receiveShopErrors(error.responseJSON))
  );
};
