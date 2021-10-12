export class userUtil {

    isAuthenticated(){
        let storageKey = process.env.REACT_APP_STORAGE_KEY;
        if(storageKey){
            return !!sessionStorage.getItem(storageKey);
        }
        return false;
    }

    // public static getStorageKey(){
    //     let storageKey = process.env.REACT_APP_STORAGE_KEY;
    //     if(storageKey){
    //         return sessionStorage.getItem(storageKey);
    //     }
    //     return null;
    // }
}