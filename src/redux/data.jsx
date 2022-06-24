import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (dispatch, getState) => {
    return await fetch('https://fakestoreapi.com/products').then(
      (res) => res.json()
    );
  }
);



const productsSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    status: null,
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.status = "loading";
    },
    [getProducts.fulfilled]: (state, action) => {
      state.status = "success";
      state.products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
 
});

export default productsSlice.reducer;