// src/features/assessor/assessorSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import assessorAPI, { fetchAssessorData } from "./assessorAPI";

// Initial state
const initialState = {
  data: [],
  loading: false,
  error: null,
};

// Thunks for CRUD operations

// CREATE
export const createAssessorData = createAsyncThunk(
  "assessor/createAssessorData",
  async (newData, thunkAPI) => {
    const response = await assessorAPI.create(newData);
    return response.data;
  }
);

// READ (Get All)
export const getAssessorData = createAsyncThunk(
  "assessor/getAssessorData",
  fetchAssessorData
);

// UPDATE
export const updateAssessorData = createAsyncThunk(
  "assessor/updateAssessorData",
  async (updatedData, thunkAPI) => {
    const response = await assessorAPI.update(updatedData.id, updatedData);
    return response.data;
  }
);

// DELETE
export const deleteAssessorData = createAsyncThunk(
  "assessor/deleteAssessorData",
  async (id, thunkAPI) => {
    await assessorAPI.delete(id);
    return id;
  }
);

// Assessor Slice
export const assessorSlice = createSlice({
  name: "assessor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // CREATE
      .addCase(createAssessorData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createAssessorData.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(createAssessorData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // READ
      .addCase(getAssessorData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAssessorData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAssessorData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // UPDATE
      .addCase(updateAssessorData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateAssessorData.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.data.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(updateAssessorData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // DELETE
      .addCase(deleteAssessorData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteAssessorData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteAssessorData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export reducer to use in the store
export default assessorSlice.reducer;
