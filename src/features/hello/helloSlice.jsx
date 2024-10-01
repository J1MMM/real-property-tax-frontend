import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
};

export const helloSlice = createSlice({
  name: "message",
  initialState: initialState,
  reducers: {
    setMessage: (state, e) => {
      state.message = e.payload;
    },
  },
});

export const { setMessage } = helloSlice.actions;
export default helloSlice.reducer;
