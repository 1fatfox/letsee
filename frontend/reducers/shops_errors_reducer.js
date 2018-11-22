import { RECEIVE_SHOP_ERRORS } from '../actions/shop_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SHOP_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
