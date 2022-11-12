import { createSlice } from "@reduxjs/toolkit";

export interface IUserSliceInitialState {
  email: string | null;
  token: string | null;
  id: string | null;
}

const initialState: IUserSliceInitialState = {
  email: null,
  token: null,
  id: null,
};

const userSlise = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
  extraReducers: {},
});

export const { setUser, removeUser } = userSlise.actions;
export default userSlise.reducer;
