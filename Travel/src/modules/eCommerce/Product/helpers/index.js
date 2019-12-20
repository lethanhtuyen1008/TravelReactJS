export const addToCart = product => {
  const carts = sessionStorage.getItem("CART")
    ? JSON.parse(sessionStorage.getItem("CART"))
    : [];
  try {
    // kiểm tra cart đã tồn tại
    if (carts.length > 0) {
      // tìm xem sản phẩm có trong cart chưa
      const indexItemInCart = carts.findIndex(
        cart =>
          cart.product_id === product.product_id &&
          cart.typePrice === product.typePrice
      );
      if (indexItemInCart !== -1) {
        // sản phẩm đã có trong cart, tiến hành update
        carts[indexItemInCart].quantity += product.quantity;
        // lưu cart lại vào sessionStorage
        sessionStorage.setItem("CART", JSON.stringify(carts));
      } else {
        // sản phẩm chưa có trong cart, tiến hành thêm mới
        carts.push(product);
        // lưu cart lại vào sessionStorage
        sessionStorage.setItem("CART", JSON.stringify(carts));
      }
    } else {
      // cart chưa tồn tại, tiến hành tạo cart
      carts.push(product);
      sessionStorage.setItem("CART", JSON.stringify(carts));
    }
  } catch (error) {
    return false;
  }
  return carts;
};
