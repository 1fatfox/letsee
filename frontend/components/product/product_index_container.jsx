import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/product_actions';
import ProductIndex from './product_index';

const msp = state => {
  return {
    products: Object.values(state.entities.products)
  };
};

const mdp = dispatch => {
  return {
  fetchProducts: () => dispatch(fetchProducts())
  };
};

export default connect(msp, mdp)(ProductIndex);
