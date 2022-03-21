import {
    openNewTicketPending,
    openNewTicketSuccess,
    openNewTicketFail,
  } from "./addTicketRedux";
  import { createNewTicket } from "../ticket/ticketApi";
  
  export const openNewTicket = (frmData) => (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch(openNewTicketPending());
  
        ////call api
        const result = await createNewTicket(frmData);
        console.log(result);
        if (result.status === "error") {
          return dispatch(openNewTicketFail(result.message));
        }
        dispatch(openNewTicketSuccess(result.message));
      } catch (error) {
        console.log(error);
        dispatch(openNewTicketFail(error.message));
      }
    });
  };