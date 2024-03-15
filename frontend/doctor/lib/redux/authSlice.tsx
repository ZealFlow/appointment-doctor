// redux/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    loggedIn: boolean;
}

const initialState: AuthState = {
    loggedIn: false
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state) => {
            state.loggedIn = true;
        },
        logout: (state) => {
            state.loggedIn = false;
        }
    }
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
