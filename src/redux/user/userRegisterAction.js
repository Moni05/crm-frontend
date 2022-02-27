import { registrationPending, registrationSuccess, registrationError } from "./userRegistrationRedux";

import { userRegistration } from "./userApi"


export const newUserRegistration = (registerData) => async (dispatch) => {
    try {
      dispatch(registrationPending());
  
      const res = await userRegistration(registerData);
      res.status === "success"
        ? dispatch(registrationSuccess(res.message))
        : dispatch(registrationError(res.message));
  
      console.log(res);
    } catch (error) {
      dispatch(registrationError(error.message));
    }
};