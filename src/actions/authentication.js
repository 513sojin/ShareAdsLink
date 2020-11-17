//액션생성자 함수와 thuck정의
import axios from 'axios';
import {
    AUTH_REGISTER,
    AUTH_REGISTER_SUCCESS,
    AUTH_REGISTER_FAILURE
} from './ActionTypes';

export function registerRequest(email,password,category_first,category_second,region,email_agreement,eula_version,privacy_version){ //thunk
    return(dispatch)=>{
        dispatch(register());

        return axios.post('/user/add.php',{email,password,category_first,category_second,region,email_agreement,eula_version,privacy_version})
        .then((response)=>{
            dispatch(registerSuccess());
        }).catch((error)=>{
            dispatch(registerFailure(error.response.data.code));
        });
    };
}

export function register(){
    return {
        type:AUTH_REGISTER
    };
}

export function registerSuccess(){
    return {
        type:AUTH_REGISTER_SUCCESS,
    };
}

export function registerFailure(error){
    return {
        type:AUTH_REGISTER_FAILURE,
        error
    };
}