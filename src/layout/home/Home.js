
import {Link,useHistory} from 'react-router-dom';
import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import * as userAction from '../../redux/users/user.actions'

let Home =()=>{
    let dispatch = useDispatch();
    let history = useHistory();

    let [user , setUser] = useState({
        userid : '',
        password : ''
    });

let gettingUserid =(event)=>{
    setUser({...user , userid : event.target.value});
}

let gettingPassword =(event)=>{
    setUser({...user , password : event.target.value});
}
let submitlogin =(event)=>{
    event.preventDefault();
   dispatch(userAction.loginUser(user,history))
}

    return(
        <React.Fragment>
            <div className="container-fluid">
                <div className="main-login">
                    <div className="child-login">

                        <h3 className="text-center mt-4"><i className="fa fa-sign-in"></i> Login</h3>
                        <div className="row">
                        <form className="col-md-8 mx-auto my-0" onSubmit={submitlogin}>
                        <div className="input-group text-center justify-center my-4">
                        <span className="input-group-text" id="addon-wrapping"><i className="fa fa-user"></i></span>
                        <input type="text" onChange={gettingUserid} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div>
                        <div className="input-group text-center justify-center my-4">
                        <span className="input-group-text" id="addon-wrapping"><i className="fa fa-key"></i></span>
                        <input type="text" onChange={gettingPassword} className="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping" />
                        
                        </div>
                        <div className="pull-right">
                        <button class="btn btn-primary float-right" type="submit"><i className="fa fa-sign-in"></i> Sign in</button>
                        </div>
                        </form>
                        </div>
                        <div className="row">
                            <div className="container  mx-0 my-4 text-center">
                            <div className="row">
                                
                                
                            <div className="col-md-6 forgetpassowrd-padding-left"><a href="#" className="text-primary">Forget password</a></div>
                            <div className="col-md-6"> <a href="#">Sign Up</a></div>
                            
                         
                            </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </React.Fragment>
    )
}

export default Home;