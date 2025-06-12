import axios from "axios";

// const IP = import.meta.env.VITE_IP;
// const PORT = import.meta.env.VITE_PORT;

// console.log("Resolved IP:", IP);
// console.log("Resolved PORT:", PORT);

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? `http://${import.meta.env.VITE_IP}:${import.meta.env.VITE_PORT}`
      : "/",
  // withCredentials: true,
});
