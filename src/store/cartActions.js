export const addItem = (product) => ({
  type: 'ADD_ITEM',
  payload: product,
});

export const removeItem = (id) => ({
  type: 'REMOVE_ITEM',
  payload: id,
});

export const applyDiscount = (code, percent) => ({
  type: 'APPLY_DISCOUNT',
  payload: { code, percent },
});

export const removeDiscount = () => ({
  type: 'REMOVE_DISCOUNT',
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});
