import React from 'react';
import { Link } from 'react-router-dom';
import ProductIndexItem from './product_index_item';


class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
  this.props.fetchProducts();
  this.props.fetchShops();
  }

  render () {
    const products = this.props.products.map( (product) => {
    return <ProductIndexItem
        product={product}
        key={product.id}
      />;
    });
      return (
        <div>
          <ul className= "product-index-ul">
            {products}
          </ul>
        </div>
      );
  }


}

export default ProductIndex;
