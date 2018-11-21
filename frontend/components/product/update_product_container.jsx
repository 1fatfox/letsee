import React from 'react';
import { connect } from 'react-redux';
import ProductForm from './product_form';
import { fetchProduct, updateProduct, deleteProduct, clearProductErrors } from './../../actions/product_actions';

class UpdateProductForm extends React.Component {

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.product.id);
  }

  componentDidUpdate(prevProps) {
     if (this.props.product.id != prevProps.match.params.product.id) {
       this.props.fetchProduct(prevProps.match.params.product.id);
     }
   }

  render() {
    const {updateProduct, formType, product, deleteProduct, errors, clearProductErrors } = this.props;
    return (
        <ProductForm
        product={product}
        formType={formType}
        updateProduct={updateProduct}
        deleteProduct={deleteProduct}
        errors={errors}
        clearProductErrors={clearProductErrors}
       />
    );
  }

}

const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const defProduct = {title: '', description: '', price: ''};
  const product = state.entities.products[ownProps.match.params.product.id] || defProduct;
  const formType = "Update your Product";
  return {
    product,
    formType,
    currentUser,
    errors: state.errors.product
  };
};

const mdp = dispatch => ({
  fetchProduct: (id) => dispatch(fetchProduct(id)),
  updateProduct: (product) => dispatch(updateProduct(product)),
  deleteProduct: (id) => dispatch(deleteProduct(id)),
  clearProductErrors: () => dispatch(clearProductErrors())
});

export default connect(msp, mdp)(UpdateProductForm);


//     if (this.props.product.owner.id != currentUser.id) return null;
