import axios from 'axios';

export class AuthUtil {

    setTokenHeader(token) {
        if (token) {
            axios.defaults.headers['x-auth-token'] = token;
        } else {
            delete axios.defaults.headers['x-auth-token'];
        }
    }

}