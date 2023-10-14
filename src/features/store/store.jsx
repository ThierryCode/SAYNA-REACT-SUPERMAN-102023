import { configureStore, createSlice } from '@reduxjs/toolkit';

export const initialState = {
  value: {
    nom: '',
    prenom: '',
    email: '',
    password: '',
    confirmpassword: '',
  },
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { login, logout } = userDataSlice.actions;

export const store = configureStore({
  reducer: {
    userData: userDataSlice.reducer,
  },
});