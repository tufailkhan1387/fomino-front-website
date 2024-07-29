import axios from "axios";
import { BASE_URL } from "../Utils/urls";

export const PostApi = async (url, postData) => {
 

  let config = {
    headers: {
      accessToken: localStorage.getItem("BearerToken"),
    },
  };
  try {
    const res = await axios.post(BASE_URL + url, postData, config);
  
    return res;
  } catch (err) {}
};
