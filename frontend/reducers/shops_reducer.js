import { RECEIVE_SHOP, RECEIVE_SHOPS } from "../actions/shop_actions";

import { merge } from 'lodash';

const shopsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SHOPS:
      return merge({}, state, action.shops);
    case RECEIVE_SHOP:
       return merge({}, state, {[action.shop.id]: action.shop});
    default:
      return state;
  }
};

export default shopsReducer;
