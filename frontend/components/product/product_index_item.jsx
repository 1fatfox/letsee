import React from 'react';
import { Link } from 'react-router-dom';




class ProductIndexItem extends React.Component {
  render () {
    const product = this.props.product;
    // debugger
    return (
      <div className="product-index-item">
        <Link className="index-productId" to={`/products/${product.id}`}>
          <img className="index-productImage" src={product.image_url}/>
          <h3 className="index-productTitle">{product.title}</h3>
          <h4 className="index-productPrice">{product.price}</h4>
        </Link>
      </div>
    );
  }

}


export default ProductIndexItem;
