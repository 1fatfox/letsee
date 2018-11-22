export const fetchCart = cart => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${cart.user_id}/carts/${cart.id}`
  });
};

export const createCart = cart => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${cart.user_id}/carts`,
    data: { cart }
  });
};

export const updateCart = cart => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${cart.user_id}/carts/${cart.id}`,
    data: { cart }
  });
};
