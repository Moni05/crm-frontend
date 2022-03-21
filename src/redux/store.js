import { configureStore } from "@reduxjs/toolkit";

import ticketReducer from "./ticket/ticketRedux";
import userReducer from "./user/userRedux";
import RegistrationRedux from "./user/userRegistrationRedux";
import newTickerReducer from "./addTicket/addTicketRedux";
import userDetailReducer from "./user/userDetailRedux";

const store = configureStore({
    reducer: {
        tickets: ticketReducer,
        user: userReducer,
        register: RegistrationRedux,
        openTicket: newTickerReducer,
        userDetail: userDetailReducer,
    },
})

export default store;