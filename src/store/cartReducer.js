const initialState = {
  items: [],
  total: 0,
  itemCount: 0,
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find((i) => i.id === action.payload.id);
      const updatedItems = existing
        ? state.items.map((i) =>
            i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i
          )
        : [...state.items, { ...action.payload, qty: 1 }];

      return {
        ...state,
        items: updatedItems,
        total: updatedItems.reduce((s, i) => s + i.price * i.qty, 0),
        itemCount: updatedItems.reduce((s, i) => s + i.qty, 0),
      };
    }

    case 'REMOVE_ITEM': {
      const filtered = state.items.filter((i) => i.id !== action.payload);
      return {
        ...state,
        items: filtered,
        total: filtered.reduce((s, i) => s + i.price * i.qty, 0),
        itemCount: filtered.reduce((s, i) => s + i.qty, 0),
      };
    }

    case 'CLEAR_CART':
      return { ...initialState };

    default:
      return state;
  }
}
