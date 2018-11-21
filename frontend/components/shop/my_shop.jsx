import React from 'react';
import { Link } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

class MyShop extends React.Component {

  componentDidMount() {
    this.props.fetchShop(this.props.shop.id);
  }

  render() {
    const { products, shop } = this.props;
    return(
      <div className="single-shop-shop">
        <div>
          <ul>
          {products.map( (product, i) => (
            <li key={i} className="shop-product-li">
            <div className="my-shop-product-image">
              {product.image}
            </div>
              <div className="my-shop-product-title">
                {product.title}
              </div>
              <div className="my-shop-product-description">
                {product.description}
              </div>
              <div className="my-shop-product-price">
                {product.price}
              </div>
            </li>
          ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default MyShop;
