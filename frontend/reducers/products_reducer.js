import { RECEIVE_PRODUCTS,
  RECEIVE_PRODUCT,
  REMOVE_PRODUCT,
  RECEIVE_PRODUCT_ERRORS
} from "../actions/product_actions";

import { RECEIVE_CURRENT_USER } from "../actions/session_actions"
import { merge } from 'lodash';

const productsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return merge({}, state, action.products);
    case RECEIVE_PRODUCT:
       return merge({}, state, {[action.product.id]: action.product});
    case REMOVE_PRODUCT:
      let newState = merge({}, state);
      delete newState[action.productId];
      return newState;
    default:
      return state;
  }
}

export default productsReducer;
