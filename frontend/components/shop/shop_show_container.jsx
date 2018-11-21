import { connect } from 'react-redux';
import { fetchShop } from '../../actions/shop_actions';
import ShopShow from './shop_show';

const msp = (state, ownProps) => {
  const defShop = {name: "", user_id: 0, product_ids:[]};
  const shop  = state.entities.shops[ownProps.match.params.shopId] || defShop;
  const products = (shop.product_ids) ? shop.product_ids.map( id => state.entities.products[id]) : [];
  return {
    shop,
    products
  };
};

const mdp = dispatch => ({
  fetchShop: id => dispatch(fetchShop(id))
});

export default connect(msp, mdp)(ShopShow);
