// import React, { Component } from 'react';
//
//
// class ShopDropdown extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = { showMenu: false };
//
//
//     this.toggleMenu = this.toggleMenu.bind(this);
//     this.logoutAndRedirect = this.logoutAndRedirect.bind(this);
//   }
//
//   toggleMenu(event) {
//     event.preventDefault();
//     const toggleState = !this.state.showMenu;
//     this.setState({ showMenu: toggleState });
//   }
//
//   toUpdate() {
//     this.props.push("/");
//   }
//
//   render() {
//     const prods = Object.values(this.props.products);
//     let you_dropdown;
//      if (this.state.showMenu) {
//        you_dropdown = (
//         <div className="menu">
//           <div className= "shop-dropdown">
//             <ul className="shop-dropdown-products" >
//               { prods.map( (product) =>
//                 <li>
//                   product.image
//                   product.title
//                   <button className="shop-dropdown-update" onClick={this.toUpdate}>Edit</button>
//                 </li>
//               )
//               }
//             </ul>
//           </div>
//         </div>
//       );
//     } else {
//       shop_dropdown = null;
//     }
//
//     return (
//       <div>
//         <button className="shop-dropdown-text" onClick={this.toggleMenu}>
//           Shop
//         </button>
//           {shop_dropdown}
//       </div>
//     );
//   }
// }
//
// export default ShopDropdown;
