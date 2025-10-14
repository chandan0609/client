// axios related configurations and api calls detailing will be added here

import axios from "axios";
const API = axios.create({
  timeout: 4000, // 4 seconds time limit to wait for the response from the server.
  baseURL: "/api",
}); // it will give u the new instance of axios with some common settings/ configurations
//it's a one time activity

export default API;
// in future whenever i have a rest call there is no need to provide the complete url in the api calls
//benefit -> mantainability
// /api: not required
// /api: i have added as a baseURL

//service ==> axios instance --> get/post/put/delete/ ==> it will use configuration (timeout(4000ms),baseURL("/api")) ==> it will go for the network call there ur proxy will be applied ==> this would be done internally by axios
