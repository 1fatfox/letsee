import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/product_actions';
import { fetchShops } from '../../actions/shop_actions';
import ProductIndex from './product_index';

const msp = state => {
  return {
    products: Object.values(state.entities.products)
  };
};

const mdp = dispatch => {
  return {
  fetchProducts: () => dispatch(fetchProducts()),
  fetchShops: () => dispatch(fetchShops())
  };
};

export default connect(msp, mdp)(ProductIndex);
