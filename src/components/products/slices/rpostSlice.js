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

export const research_infosFetch = createAsyncThunk(
  "research_infos/research_infosFetch",
  async () => {
    
    try {
      const response = await axios.get(
        "http://127.0.0.1:3000/research_infos",

        {},
        
         config,

      );
      
      return response.data;
    } catch (error) {
      console.log(error);
    }
    
  }
);

const research_infosSlice = createSlice({
  name: "research_infos",
  initialState,
  reducers: {},
  extraReducers: {
    [research_infosFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [research_infosFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [research_infosFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default research_infosSlice.reducer;