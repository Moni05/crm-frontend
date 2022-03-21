import { createSlice  } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState: {
        isLoading: false,
        isAuth: false,
        currentUser: null,
        error: "",
    },

    reducers: {

        loginPending: (state) => {
            state.isLoading = true;
        },
        
        loginSuccess: (state, { payload }) => {
            state.isLoading = false;
            state.isAuth = true;
            state.currentUser = payload;
            state.error = "";
        },

        loginFail: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },

        logout: (state) => {
            state.isAuth = false;
            state.currentUser = null;
            state.error = "";

        }
    },
})

export const { loginPending, loginSuccess, loginFail, logout } = userSlice.actions;
export default userSlice.reducer;