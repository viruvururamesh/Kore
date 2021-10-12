import React from "react";
import { Route, Redirect } from 'react-router-dom';
import { userUtil } from "../authUtil/userUtil";

let PrivateRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest }
    render = {
        (props) => {
            return !userUtil.isAuthenticated() ? < Redirect to = "/users/login" / > : < Component {...props }
            />
        }
    }
    />
};
export default PrivateRoute;