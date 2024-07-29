


export const setUserName = (userName) =>{
    localStorage.setItem('userName',userName);
}

export const getUserName = () =>{
    const userName = localStorage.getItem('userName');
    if(!userName) return false;
    return userName;
    
}

export const setAccessToken = (token) =>{
    localStorage.setItem('accessToken',token);
}

export const getAccessToken = () =>{
    const accessToken = localStorage.getItem('accessToken');
    if(!accessToken) return false;
    return accessToken;
}