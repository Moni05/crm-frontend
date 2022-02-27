import { configureStore } from "@reduxjs/toolkit";

import ticketReducer from "./ticket/ticketRedux";
import userReducer from "./user/userRedux";
import RegistrationRedux from "./user/userRegistrationRedux";

const store = configureStore({
    reducer: {
        tickets: ticketReducer,
        user: userReducer,
        register: RegistrationRedux,
    },
})

export default store;