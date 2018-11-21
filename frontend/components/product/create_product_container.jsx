import { connect } from 'react-redux';
import { createProduct, clearProductErrors } from '../../actions/product_actions';
import ProductForm from './product_form';

const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id] ? state.entities.users[state.session.id] : "" ;
  const product = {
    title: '',
    description: '',
    price: 0,
    shop_id: "",
    shop: "",
    imageFile: null,
    image: null
  };
  const formType = "Add a new listing";
  return {
    product,
    formType,
    currentUser,
    errors: state.errors.product,
    push: ownProps.history.push,
  };
};

const mdp = dispatch => ({
  clearProductErrors: () => dispatch(clearProductErrors()),
  action: (product) => dispatch(createProduct(product))
});


export default connect(msp, mdp)(ProductForm);
