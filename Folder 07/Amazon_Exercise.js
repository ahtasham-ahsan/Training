const user = {
    name: "Kin",
    active: true,
    cart: [],
    purchases: [],
  };
  
  const compose =
    (f, g) =>
    (...args) =>
      f(g(...args));
  console.log(
    purchase_item(
      empty_cart,
      buy_item,
      apply_tax_to_item,
      item_to_cart
    )(user, { name: "laptop", price: 9000 })
  );
  
  function purchase_item(...fns) {
    return fns.reduce(compose);
  }
  function item_to_cart(user, item) {
    const updated_Cart = user.cart.concat(item);
    return Object.assign({}, user, { cart: updated_Cart });
  }
  function apply_tax_to_item(user) {
      const {cart} = user;
      const tax_rate = 1.3;
      const updated_Cart = cart.map(item => {
          return {
              name:item.name, 
              price: item.price*tax_rate
          }
      });
      return Object.assign({}, user, { cart: updated_Cart });
  }
  function buy_item(user) {
    return Object.assign({}, user, {purchases: user.cart});
  }
  function empty_cart(user) {
    return Object.assign({}, user, {cart: []});
  }
  