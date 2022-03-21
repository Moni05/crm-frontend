import axios from "axios";

const BaseUrl = process.env.REACT_APP_URL;

export const getAllTickets = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`${BaseUrl}ticket`, {
          headers: {
            token:"Bearer " + JSON.parse(localStorage.getItem("token")).accessToken,
          },
        });
        
  
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
};

export const getSingleTicket = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(`${BaseUrl}ticket/${_id}`, {
        headers: {
          token:"Bearer " + JSON.parse(localStorage.getItem("token")).accessToken,
        },
      });

      resolve(result);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};

export const createNewTicket = (frmData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(`${BaseUrl}ticket`, frmData, {
        headers: {
          token:"Bearer " + JSON.parse(localStorage.getItem("token")).accessToken,
        },
      });
      

      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};


export const updateReplyTicket = (_id, msgObj) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.put(`${BaseUrl}ticket/${_id}`, msgObj, {
        headers: {
          token:"Bearer " + JSON.parse(localStorage.getItem("token")).accessToken,
        },
      });

      resolve(result.data);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};

export const updateTicketStatusClosed = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.patch(
        `${BaseUrl}ticket/close-ticket/${_id}`,
        {},
        {
          headers: {
            token:"Bearer " + JSON.parse(localStorage.getItem("token")).accessToken,
          },
        }
      );

      resolve(result.data);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};