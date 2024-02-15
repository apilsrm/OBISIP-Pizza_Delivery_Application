import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../apiRoute/api";

//userRegister
export const register = createAsyncThunk(
  "user/register",
  async ({ formData, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.userRegister(formData);
      toast.success(response.data.message || "user register succesfully");
      navigate("/login");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//user login

export const login = createAsyncThunk(
  "user/login",
  async ({ loginValue, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.userLogin(loginValue);
      toast.success(response.data.message || "user login succesfully");

      if (response.data.user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/dashboard");
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//get single user

export const profile = createAsyncThunk(
  "/user/profile",
  async (__, { rejectWithValue }) => {
    try {
      const response = await api.userProfile();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//update porfile
export const profileUpdate = createAsyncThunk(
  "/update/user",
  async ({ updateForm, toast }, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.updateProfile(updateForm);
      toast.success(response.data.message || "profilee update success! ");
      dispatch(profile());
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//change password
export const changePassword = createAsyncThunk(
  "/change/password",
  async ({ changeValue, toast, navigate }, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.passwordUpdate(changeValue);
      toast.success(response.data.message || "password channge sucessfully");
      dispatch(setLogout());
      dispatch(clearUser());
      navigate("/login");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: "",
    isLoading: "",
    error: "",
    message: "",
    isAuthenticated: !!localStorage.getItem("token"),
    user: {},
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },

    setLogout: (state) => {
      localStorage.removeItem("token");
      state.user = null;
      state.isAuthenticated = false;
    },

    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })

      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        localStorage.setItem("token", action.payload.token);
        state.isAuthenticated = true;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })

      .addCase(profile.pending, (state) => {
        state.loading = true;
      })
      .addCase(profile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(profile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })

      .addCase(profileUpdate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(profileUpdate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.data;
      })
      .addCase(profileUpdate.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      })

      .addCase(changePassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export const { clearError, setLogout, clearUser } = authSlice.actions;
export default authSlice.reducer;
