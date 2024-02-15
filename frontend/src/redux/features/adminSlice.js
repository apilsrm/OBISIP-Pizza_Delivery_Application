import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../apiRoute/api";

//add product
export const createPizza = createAsyncThunk(
  "/create/pizza",
  async ({ formData, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.addPizza(formData);
      toast.success(response.data.message || "product create successfully");
      navigate("/admin/dashboard");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//updateProduct

// export const adminUpdateProduct = createAsyncThunk(
//   "/admin/update/product",
//   async ({  updateFormData,id, toast, navigate }, { rejectWithValue }) => {
//     try {
//       const response = await api.updateAdminProduct(updateFormData, id);
//       toast.success(response.data.message || "product update success! ");
//       navigate("/admin/hamrodokan/panel")
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

//delete product

export const pizzaDelete = createAsyncThunk(
  "/delete/pizzas",
  async ({ id, toast }, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.deletePizza(id);
      toast.success(response.data.message || "product delete successfully");
      dispatch(pizzasAdmin());

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// //get single product by admin
// export const productAdminSingle = createAsyncThunk(
//   "/single/admin/product",
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await api.singleAdminProduct(id);

//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

//get all product
export const pizzasAdmin = createAsyncThunk(
  "admin/pizzas",
  async (__, { rejectWithValue }) => {
    try {
      const response = await api.getAdminPizzas();

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    loading: "",
    isLoading: "",
    error: "",
    message: "",
    adminPizzas: [],
    adminPizza: {},
  },

  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(pizzasAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(pizzasAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.adminPizzas = action.payload.data;
      })
      .addCase(pizzasAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })

      //send garda no ,data
      .addCase(createPizza.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPizza.fulfilled, (state, action) => {
        state.loading = false;
        state.adminPizza = action.payload;
      })
      .addCase(createPizza.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })

      //single product

      // .addCase(productAdminSingle.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(productAdminSingle.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.adminProduct = action.payload.data;
      // })
      // .addCase(productAdminSingle.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.payload.message;
      // })

      // //update add post put no data
      // .addCase(adminUpdateProduct.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(adminUpdateProduct.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.adminProduct = action.payload;
      // })
      // .addCase(adminUpdateProduct.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.payload.message;
      // })

      //delete
      .addCase(pizzaDelete.pending, (state) => {
        state.loading = true;
      })
      .addCase(pizzaDelete.fulfilled, (state, action) => {
        state.loading = false;
        state.adminPizza = action.payload;
      })
      .addCase(pizzaDelete.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export const { clearError } = adminSlice.actions;
export default adminSlice.reducer;
