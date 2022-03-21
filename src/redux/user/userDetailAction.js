import { getUserPending, getUserSuccess, getUserFail } from "./userDetailRedux";
import { fetchUser } from "./userApi";

export const getUserProfile = () => async (dispatch) => {
  try {
    dispatch(getUserPending());

    const result = await fetchUser();

    if (result._id)
      return dispatch(getUserSuccess(result));

    dispatch(getUserFail("User is not found"));
  } catch (error) {
    dispatch(getUserFail(error));
  }
};