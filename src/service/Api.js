import axios from "axios";

export function getCookies(name) { 
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

const token = getCookies("token"); // identify token

export const Api = () => axios.create({
  baseURL: "http://localhost:80", // You can change your api baseURL from here.
  headers: { Authorization: `Bearer ${token}` }, // Your token information is also sending to server
});

export default Api