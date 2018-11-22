import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class ShopForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.shop;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createShop(this.state).then(() =>
      this.props.push('/products/new')
    );
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render () {

    return (
      <div className="shop-create-update">
        <h1 className= "shop-form-type-header">{this.props.formType}</h1>
          <h3 className="shop-form-sub-header">Choose a memorable name that reflects your style.</h3>
          <form className="shop-create-update-form" onSubmit={this.handleSubmit}>
            <div className="shop-input">
              <label className="shop-name-label">
               <input
                 className="shop-name-input"
                 type="text"
                 value={this.state.name}
                 onChange={this.update('name')}
               />
              </label>
            </div>
            <div className="submit-shop">
              <input
                className="submit-shop-input"
                type="submit"
                value="Save and Continue"
              />
            </div>
          </form>
      </div>
    );
  }

}


export default withRouter(ShopForm);
