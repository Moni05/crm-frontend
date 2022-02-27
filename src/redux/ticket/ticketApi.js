import axios from "axios";

const BaseUrl = process.env.REACT_APP_URL;

export const getAllTickets = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`${BaseUrl}ticket`, {
          headers: {
            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDAzYmRkNWU3ODEyODkzMzRmODIxNyIsImNvbXBhbnkiOiJ4eXoiLCJpYXQiOjE2NDEzNzg5NzUsImV4cCI6MTY0MTM4MDc3NX0.y6HX8ReDXpdstA5A3LXHRuaBt6755Ew3gRy-yAiVFdg",
          },
        });
  
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  };