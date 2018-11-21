export const fetchShops = () => {
  return $.ajax({
    method: "GET",
    url: "/api/shops"
  });
};


export const fetchShop = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/shops/${id}`
  });
};

export const createShop = (shop) => {
  return $.ajax({
    method: "POST",
    url: `/api/shops`,
    data: { shop }
  });
};

export const updateShop = (shop) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/shops/${shop.id}`,
    data: { shop }
  });
};
