import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const initialState = {
  items: [],
  status: null,
};
const token = localStorage.getItem("jwt");
console.log(token)

const config = {
  headers: { Authorization: `Bearer ${token}` }
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    
    try {
      const response = await axios.get(
        "http://127.0.0.1:3000/products",

        {},
        
         config,

      );
      
      return response.data;
    } catch (error) {
      console.log(error);
    }
    
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default productsSlice.reducer;