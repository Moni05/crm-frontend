import { createSlice } from "@reduxjs/toolkit";

const userPasswordSlice = createSlice({
	name: "passwordReset",
	initialState: {
        isLoading: false,
        status: "",
        message: "",
        showUpdatePassForm: false,
        email: "",
    },

	reducers: {

		otpReqPending: state => {
			state.isLoading = true;
		},

		otpReqSuccess: (state, { payload }) => {
			state.isLoading = false;
			state.status = "success";
			state.message = payload.message;
			state.email = payload.email;
			state.showUpdatePassForm = true;
		},

		updatePassSuccess: (state, { payload }) => {
			state.isLoading = false;
			state.status = "success";
			state.message = payload;
			// state.showOtpForm = false;
		},

		otpReqFail: (state, { payload }) => {
			state.isLoading = false;
			state.status = "error";
			state.message = payload;
		},
	},
});



export const { otpReqPending, otpReqSuccess, updatePassSuccess, otpReqFail } = userPasswordSlice.actions;
export default userPasswordSlice.reducer;