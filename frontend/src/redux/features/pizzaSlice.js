import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../apiRoute/api";


//state  define  can makeaction

//get all product 
export const getPizzas = createAsyncThunk(
  "/get/pizzas",
  async (__, { rejectWithValue }) => {
    try {
      const response = await api.getAllPizzas();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const pizzaSlice = createSlice({
    name: "productss",
    initialState: {
        loading: "",
        error: "",
        message:"",
        pizzas: [],
        pizza: {},

    },
    //direct    acccess
    reducers:{
        clearError:(state)=>{
            state.error = null
        } 
    },
   
    extraReducers: (builder) => {
        builder
          .addCase(getPizzas.pending, (state) => {
            state.loading = true;
          })
          .addCase(getPizzas.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload.pizzas;
          })
          .addCase(getPizzas.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
          })
    
          
      },
});

export const {clearError} = pizzaSlice.actions;

export default pizzaSlice.reducer;