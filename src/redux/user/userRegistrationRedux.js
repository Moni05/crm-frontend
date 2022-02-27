import { createSlice  } from "@reduxjs/toolkit";

const userRegistrationSlice = createSlice({
    name:"userRegistration",
    initialState: {
        isLoading: false,
        status: "",
        message: "",
    },

    reducers: {

        registrationPending: (state) => {
            state.isLoading = true;
        },
        
        registrationSuccess: (state, { payload }) => {
            state.isLoading = false;
            state.status = "success";
            state.message = payload;
        },

        registrationError: (state, { payload }) => {
            state.isLoading = false;
            state.status = "error";
            state.message = payload;
        }
    },
})

export const { registrationPending, registrationSuccess, registrationError } = userRegistrationSlice.actions;
export default userRegistrationSlice.reducer;