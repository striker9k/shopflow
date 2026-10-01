export const addItem = (product) => ({
  type: 'ADD_ITEM',
  payload: product,
});

export const removeItem = (id) => ({
  type: 'REMOVE_ITEM',
  payload: id,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});
