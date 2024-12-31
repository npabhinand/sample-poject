import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  selectedButtons: [],
};

// Create
const filterSlice = createSlice({
  name: 'button',
  initialState,
  reducers: {
    //adding
    addButton: (state, action) => {
      if (!state.selectedButtons.includes(action.payload)) {
        state.selectedButtons.push(action.payload);
      }
    },
    //deleting
    deleteButton: (state, action) => {
      state.selectedButtons = state.selectedButtons.filter(
        (button) => button !== action.payload
      );
    },
  },
});


export const { addButton, deleteButton } = filterSlice.actions;

// Export the reducer
export default filterSlice.reducer;
