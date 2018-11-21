import React from 'react';
import { Link } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

class ShopShow extends React.Component {

  componentDidMount() {
    this.props.fetchShop(this.props.shop.id);
  }

  render() {
    const { products, shop } = this.props;
    return(
      <div className="single-shop-show">
        <div>
          <ul>
          {products.map( (product, i) => (
            <li key={i} className="shop-product-li">
            <div><img className="show-shop-product-image" src={product.image}/></div>
              <div className="shop-show-product-title">
                {product.title}
              </div>
              <div className="shop-show-product-description">
                {product.description}
              </div>
              <div className="shop-show-product-price">
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

export default ShopShow;
