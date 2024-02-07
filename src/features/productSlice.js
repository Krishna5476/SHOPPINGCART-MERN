import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Axios } from "axios";

const initialState = {
  items: [],
  status: null,
  error: null,
};
// if we want only particular product from the products we mention the id as the arg

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    const response = Axios.get("http://localhost:5000/products");
    return response?.data;
  }
);
// *********below is how to customize the error*****

// export const productsFetch = createAsyncThunk(
//   "products/productsFetch",
//   async (id = null, { rejectWithValue }) => {
//     try {
//       const response = Axios.get("http://localhost:5000/products");
//       return response?.data;
//     } catch (error) {
//       // customising the error
//       return rejectWithValue("An error occured");
//     }
//   }
// );
// ***********************************************

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productsFetch.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(productsFetch.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload;
      })
      .addCase(productsFetch.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;

// ******   RTK query is created on top of the create Slice and asyncThunk
