import { connect } from 'react-redux';
import { fetchShop } from '../../actions/shop_actions';
import MyShop from './my_shop';

const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id] ? state.entities.users[state.session.id] : null;
  const shopID = currentUser.shop ? currentUser.shop : null ;
  const shop = state.entities.shops[shopID];
  const products = (shop.product_ids) ? shop.product_ids.map( id => state.entities.products[id]) : [];
  return {
    currentUser,
    shop,
    products
  };
};

const mdp = dispatch => ({
  fetchShop: id => dispatch(fetchShop(id))
});

export default connect(msp, mdp)(MyShop);
