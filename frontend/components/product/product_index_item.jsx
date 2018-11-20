import React from 'react';
import { Link } from 'react-router-dom';




class ProductIndexItem extends React.Component {
  render () {
    const product = this.props.product;
    return (
      <div className="product-index-item">
        <Link className="index-productId" to={`/products/${product.id}`}>
          <ul>
            <img className="index-productImage" src={product.image}/>
            <li className="index-productTitle">{product.title}</li>
            <li className="index-productShop">{product.shop_name}</li>
            <li className="index-productPrice">${product.price}</li>
          </ul>
        </Link>
      </div>
    );
  }

}


export default ProductIndexItem;
