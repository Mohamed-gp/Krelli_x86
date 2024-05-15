import axios from "axios";

const env = "developement"

// const url = "http://localhost:3000/"
const url = "https://krelli-x86-1.onrender.com/"

const customAxios = axios.create({  
    baseURL: url, // Set a base URL for all requests
    // timeout: 5000, // Set a timeout for requests in milliseconds
    // headers: {
    //   'Content-Type': 'application/json', // Set default headers
    //   'Authorization': 'Bearer your-access-token' // Add authorization header if needed
    // }
    withCredentials : true,

});


export default customAxios


