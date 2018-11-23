export const fetchCartProducts = cart => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${cart.user_id}/carts/${cart.id}/cartProducts`
  });
};


export const fetchCartProduct = cartProduct => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${cartProduct.user_id}/carts/${cartProduct.cart_id}/cartProducts/${cartProduct.id}`
  });
};

export const createCartProduct = cartProduct => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${cartProduct.user_id}/carts/${cartProduct.cart_id}/cartProducts`,
    data: { cartProduct }
  });
};

export const updateCartProduct = cartProduct => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${cartProduct.user_id}/carts/${cartProduct.cart_id}/cartProducts/${cartProduct.id}`,
    data: { cartProduct }
  });
};

export const deleteCartProduct = cartProduct => {
  return $.ajax({
    method: "DELETE",
    url: `/api/users/${cartProduct.user_id}/carts/${cartProduct.cart_id}/cartProducts/${cartProduct.id}`
  });
};
