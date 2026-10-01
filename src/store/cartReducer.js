const initialState = {
  items: [],
  total: 0,
  discount: null,
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const newItems = [...state.items, action.payload];
      return {
        ...state,
        items: newItems,
        total: newItems.reduce((sum, item) => sum + item.price, 0),
      };
    }

    case 'REMOVE_ITEM': {
      const filtered = state.items.filter((item) => item.id !== action.payload);
      return {
        ...state,
        items: filtered,
        total: filtered.reduce((sum, item) => sum + item.price, 0),
      };
    }

    case 'APPLY_DISCOUNT': {
      state.discount = action.payload;
      state.total = state.total * (1 - action.payload.percentage / 100);
      return state;
    }

    case 'CLEAR_CART':
      return { ...initialState };

    default:
      return state;
  }
}
