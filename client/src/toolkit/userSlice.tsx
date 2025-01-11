import { InitialState } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: InitialState = {
  accessToken: "",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    saveToken: (state, { payload }: PayloadAction<string>) => {
      state.accessToken = payload;
    },
  },
});

export const { saveToken } = userSlice.actions;

export default userSlice.reducer;
