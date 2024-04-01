import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.counter++;
      } else {
        state.items.push({ ...newItem, counter: 1 });
      }
    },
    decreaseItem: (state, action) => {
      const idToDecrease = action.payload.id;
      const existingItem = state.items.find(item => item.id === idToDecrease);
      if (existingItem && existingItem.counter > 1) {
        existingItem.counter--;
      } else if (existingItem) {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      }
    },
    increaseItem: (state, action) => {
      const idToDecrease = action.payload.id;
      const existingItem = state.items.find(item => item.id === idToDecrease);
      if (existingItem) {
        existingItem.counter++;
      }
    },
    clearCart: state => {
      state.items = [];
    },
  },
});

export const { addItem, increaseItem, clearCart, decreaseItem } = cartSlice.actions;

export default cartSlice.reducer;
