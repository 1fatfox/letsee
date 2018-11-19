import React from 'react';
import { Link } from 'react-router-dom';




class ProductIndexItem extends React.Component {
  render () {
    const product = this.props.product;
    // debugger
    return (
      <div>
        <Link className="index-productId" to={`/products/${product.id}`}>
          <img className="index-productImage" src={product.image_url} />
          <h3 className="index-productTitle"></h3>
        </Link>
      </div>
    );
  }

}


export default ProductIndexItem;
