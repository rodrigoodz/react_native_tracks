import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

//-> ngrok http 3000
const instance = axios.create({
  baseURL: "http://25ec5d737cde.ngrok.io",
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
