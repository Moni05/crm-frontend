import axios from "axios";

const BaseUrl = process.env.REACT_APP_URL;

export const userLogin = (loginData) =>{
    return new Promise(async(resolve, reject) => {

        try{

            const res = await axios.post(`${BaseUrl}auth/login`, loginData);

            resolve(res.data);

            if(res.data.status === "success"){
                localStorage.setItem("token", JSON.stringify({accessToken: res.data.accessToken}) );
            }

        } catch(error){
            reject(error);
        }

    })
}

export const userRegistration = (registerData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(`${BaseUrl}auth/register`, registerData);
  
        resolve(res.data);
  
        if (res.data.status === "success") {
          resolve(res.data);
        }
      } catch (error) {
        reject(error);
      }
    });
};

export const userRegistrationVerification = (verifyData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.patch(`${BaseUrl}user/verify`, verifyData);

      console.log(verifyData);

      resolve(res.data);

      if (res.data.status === "success") {
        resolve(res.data);
      }
    } catch (error) {
      reject(error);
    }
  });
};