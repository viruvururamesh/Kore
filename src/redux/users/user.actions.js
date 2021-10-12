export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const loginUser=(user,history)=>{
   
    return async(dispatch)=>{
        try{
            dispatch({
                type:LOGIN_USER_REQUEST
            });
            let dataUrl= `https://mocki.io/v1/199adf55-b837-4695-8527-936384182d54`

            dispatch({
                type:LOGIN_USER_SUCCESS,
        
                payload:{
                    token:user.userid
                },
                
            });

            if(user.userid==='abc' && user.password==="123"){
                sessionStorage.setItem('logineduser',user.userid);
               
            history.push('/Home')}
            else {
                history.push('/')
            }


        }
        catch(error) {
            dispatch({
                type : LOGIN_USER_FAILURE,
                payload : {
                    error : error
                }
            });

        }
    }
}