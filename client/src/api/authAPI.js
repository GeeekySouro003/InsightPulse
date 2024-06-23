 import axios from 'axios';
 import { LOGOUT_API } from './route';

 export const logoutApiCall = async () => {
  try {
     const response = await axios.post(`${LOGOUT_API}`);
     return response.data;
   } catch (error) {
     throw error;
   }
};