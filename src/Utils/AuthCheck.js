import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const setLoginToken = (token) => {
  localStorage.setItem("accessToken", token);
};

export const getLoginToken = () => {
  let token = localStorage.getItem("accessToken");
  if (!token) {
    return false;
  }
  return token;
};

export const setLoginStatus = (status) => {
  localStorage.setItem("loginStatus", status);
};


export const getLoginStatus = () => {
  let status = localStorage.getItem("loginStatus");
  if (!status) {
    return false;
  }
  return status;
};

export const setUserName=(userName) =>{
  localStorage.setItem('userName',userName);
}

export const getUserName = () =>{
  let username = localStorage.getItem('userName');
  if(!username){
    return false;
  }
  return username;
}
export const setEmail=(email) =>{
  localStorage.setItem('email',email);
}

export const getEmail = () =>{
  let email = localStorage.getItem('email');
  if(!email){
    return false;
  }
  return email;
}
export const setuserId=(userId) =>{
  localStorage.setItem('userId',userId);
}

export const getuserId = () =>{
  let userId = localStorage.getItem('userId');
  if(!userId){
    return false;
  }
  return userId;
}

export const removeLocalStorageData = () =>{
  localStorage.removeItem('loginStatus');
  localStorage.removeItem('userId');
  localStorage.removeItem('email');
  localStorage.removeItem('userName');
  localStorage.removeItem('accessToken');
  localStorage.removeItem('firstName');
  localStorage.removeItem('lastName');
}


