import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
  cart: [],
};
const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.find((course) => course.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    },
    add: (state , action) => {
      const item = action.payload
      const existItem = state.cart.find((course)=> course.id === item.id)
      if(existItem){
        existItem.quantity++ ;
      }
      else{
        state.cart.push({...item , quantity: 1})
      }
    },
    remove: (state, action) => {
      const item = action.payload;
      const minus = state.cart.find((course) => course.id === item.id);

      if (minus && minus.quantity > 1){
        minus.quantity--;
      }
    },
    clearcart:(state) => {
      state.cart = [];
    }
  },
});
export const { addtocart, add, remove ,  clearcart} = AppSlice.actions;
export default AppSlice.reducer;
