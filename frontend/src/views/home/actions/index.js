import axios from "axios";
import {toast} from "react-toastify";

export const setResults = (data) => ({
    type: 'SET_RESULTS',
    data
});

export const setInput = (data) => ({
    type: 'SET_INPUT',
    data
});

export const setDetails = (data) => ({
    type: 'SET_DETAILS',
    data
});

export const goToHome = (data) => ({
    type: 'GO_TO_HOME',
    data
});


export const clear = () => ({
    type: 'SET_CLEAR',
});

export const setError = () => ({
    type: 'SET_ERROR',
});

export const addToList = (data) => ({
    type: 'ADD_TO_LIST',
    data
});

export const removeToList = (data) => ({
    type: 'REMOVE_TO_LIST',
    data
});


export const goToList = (data) => ({
    type: 'GO_TO_LIST',
    data
});


export const loggedIn = (data) => ({
    type: 'LOGGED_IN',
    data
});

export const setEmail = (data) => ({
    type: 'SET_EMAIL',
    data
});

export const setPassword = (data) => ({
    type: 'SET_PASSWORD',
    data
});


export function signUp(email,password) {
    return function (dispatch, getState) {
        let state = getState();
        
        return axios.post(`http://localhost:3000/register?email=`+state.data.email+'&password='+state.data.password,{
                withCredentials: true
            }
        ).then(response => {
            toast('Successfully Registered');
            dispatch(loggedIn(true));
        }).catch(error => {
               toast('Some Error Occured');
               dispatch(setError());
            });  
}
}

export function signIn(email,password) {
    return function (dispatch, getState) {
        let state = getState();
        
        return axios.get(`http://localhost:3000/signIn`,{
                params:{
                    email:state.data.email,
                    password:state.data.password
                },
                withCredentials: true
            }
        ).then(response => {
            toast('Signed In');
            dispatch(loggedIn(true));
        }).catch(error => {
               toast('Invalid Credentials');
               dispatch(setError());
         });  
}
}


export function getFav() {
    return function (dispatch, getState) {
        let state = getState();
    
        return axios.get(`http://localhost:3000/getFav`,{
                params:{
                    email:state.data.email,
                },
                withCredentials: true
            }
        ).then(response => {
            dispatch(goToList(true,response.data));
        }).catch(error => {
              toast('Invalid Credentials');
        });  
    }
}

export function updateFav() {
    return function (dispatch, getState) {
        let state = getState();
        let email = state.data.email;
        return axios.post(`http://localhost:3000/updateFav?email=`+email,
               state.data.list
        ).then(response => {
            toast('Successfully Updated');
        }).catch(error => {
             toast('Some Error Occured');
        });
}
}

export function retrieveUsers() {
    return function (dispatch, getState) {
        let state = getState();
        let value = state.data.inputValue;
        let filterType = state.data.filterType;

        return axios.get(`http://localhost:3000/repos`,{
                params:{
                    search: value,
                    type:filterType
                },
                withCredentials: true
            }
        ).then(response => {
                console.log('response',response);
                dispatch(setResults(response.data));
            }).catch(error => {
               toast('Some Error Occured');
               dispatch(setError());
            });  
    }
}



