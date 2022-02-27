import {
    fetchTicketLoading,
    fetchTicketSuccess,
    fetchTicketFail,
    searchTickets,
    fetchSingleTicketLoading,
    fetchSingleTicketSuccess,
    fetchSingleTicketFail,
    replyTicketLoading,
    replyTicketSuccess,
    replyTicketFail,
    closeTicketLoading,
    closeTicketSuccess,
    closeTicketFail,
} from "./ticketRedux";
import { getAllTickets } from "./ticketApi";

export const fetchAllTickets = () => async (dispatch) => {
    dispatch(fetchTicketLoading());
    try {
      const response = await getAllTickets();
      
        dispatch(fetchTicketSuccess(response.data));
    } catch (error) {
      dispatch(fetchTicketFail(error.message));
    }
};

export const filterSerachTicket = (str) => (dispatch) => {
    dispatch(searchTickets(str));
};