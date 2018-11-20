import { connect } from 'react-redux';
import { createProduct, clearProductErrors } from '../../actions/product_actions';
import ProductForm from './product_form';

const msp = state => {
  const product = {
    title: '',
    description: '',
    price: 0,
    shop_id: null,
    imageFile: null,
    image: null
  };
  const formType = "Add a new listing";
  const currentUser = state.entities.users[state.session.id];
  return {product, formType, currentUser, errors: state.errors.product};
};

const mdp = dispatch => ({
  clearProductErrors: () => dispatch(clearProductErrors()),
  action: (product) => dispatch(createProduct(product))
});


export default connect(msp, mdp)(ProductForm);
