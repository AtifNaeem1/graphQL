exports.Category = {
  products: (parent, args, { products }) => {
    return products.filter(
      (product) => parent.id === product.categoryId
    );
  },
};
