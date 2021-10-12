import * as userActions from './user.actions'
let initialstate = {
    loading:false,
    userid:''
} 
export const userReducer =(state=initialstate,action)=>{
    
switch(action.type){

    case userActions.LOGIN_USER_REQUEST:
        return {
            ...state,
            loading:true
        }
    case userActions.LOGIN_USER_SUCCESS:
        let storageKey=process.env.REACT_APP_STORAGE_KEY;
        if(storageKey){
            sessionStorage.setItem(storageKey,action.payload.token)
        }
        return {
            ...state,

        }
        default:return state;

}
}
