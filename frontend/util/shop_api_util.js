export const createShop = (shop) => {
  return $.ajax({
    method: "POST",
    url: `/api/shops`,
    data: { shop }
  });
};
