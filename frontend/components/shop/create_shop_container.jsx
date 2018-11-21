import { connect } from 'react-redux';
import { createShop } from '../../actions/shop_actions';
import ShopForm from './shop_form';

const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const shop = {name: "", user_id: currentUser.id};
  const formType = "Name Your Shop";
  return {
    currentUser,
    shop,
    push: ownProps.history.push
  };
};

const mdp = dispatch => ({
  createShop: (shop) => dispatch(createShop(shop))
});

export default connect(msp, mdp)(ShopForm);
