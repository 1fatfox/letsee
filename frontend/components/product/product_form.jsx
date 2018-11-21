import React from 'react';
import { withRouter, Link } from 'react-router-dom';



class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.product;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleFile(e) {
    const readFile = new FileReader();
    const file = e.currentTarget.files[0];
    readFile.onloadend = () => {
      this.setState({ image: readFile.result, imageFile: file});
    };

    if (file) {
      readFile.readAsDataURL(file);
    } else {
      this.setState({ image: "", imageFile: null });
    }

  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('product[title]', this.state.title);
    formData.append('product[description]', this.state.description);
    formData.append('product[price]', this.state.price);
    formData.append('product[owner]', this.props.currentUser);
    formData.append('product[shop_id]', this.props.currentUser.shop);

    if (this.state.imageFile) {
      formData.append('product[image]', this.state.imageFile);
    }
    $.ajax({
      url: '/api/products',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
    });
    this.props.push('/');
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };

  }

  render () {

    return (
      <div className="product-create-update">
        <h1 className= "product-form-type-header">{this.props.formType}</h1>
          <form className="product-create-update-form" onSubmit={this.handleSubmit}>
          <div className="product-image-div">
            <label className="product-photos-label">Photos
              <input
              className="product-input-photo"
               type="file"
               onChange={this.handleFile}
               multiple
              />
            </label>
          </div>
            <div className="product-input">
              <label className="product-title-label">Title
               <input
                 className="product-title-input"
                 type="text"
                 value={this.state.title}
                 onChange={this.update('title')}
               />
              </label>
              <label className="product-description-label">Description
               <input
                 className="product-description-input"
                 type="text"
                 value={this.state.description}
                 onChange={this.update('description')}
               />
              </label>
              <label className="product-price-label">Price
               <input
                 className="product-price-input"
                 type="number"
                 value={this.state.price}
                 onChange={this.update('price')}
               />
              </label>
            </div>
            <div className="submit-product">
              <input
                className="submit-product-input"
                type="submit"
                value="Save and Continue"
              />
            </div>
          </form>
      </div>
    );
  }

}


export default withRouter(ProductForm);

// const errors = () => (
//   this.props.errors.map( (error) =>
//     <li className="product-error">{error}</li>
//   )
// );
