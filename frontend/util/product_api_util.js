export const fetchProducts = () => {
  return $.ajax({
    method: "GET",
    url: "/api/products"
  });
};


export const fetchProduct = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/products/${id}`,
    data: {id}
  });
};

export const createProduct = (product) => {
  return $.ajax({
    method: "POST",
    url: `/api/products`,
    data: { product }
  });
};

export const deleteProduct = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/product/${id}`
  });
};
