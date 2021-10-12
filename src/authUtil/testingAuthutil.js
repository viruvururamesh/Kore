import React from 'react';

let testingAuthutil =()=>{
    let storageKey = process.env.REACT_APP_STORAGE_KEY;
    if(storageKey){
        return !!sessionStorage.getItem(storageKey);
    }
    return false;
}

export default testingAuthutil;