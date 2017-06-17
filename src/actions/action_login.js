export const LOGIN = 'LOGIN';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_ACTION = 'LOGIN_ACTION';
export const LOGOUT = 'LOGOUT';
export const ACT_FIREBASE = 'ACT_FIREBASE';
import axios from 'axios';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';


export function activate() {
  return {
    type: ACT_FIREBASE
  }
}

export function loginAction() {
  return {
    type: LOGIN_ACTION
  };
}

export function logItIn(email, password) {
  return (dispatch) => {
    // firebase.auth().signInWithEmailAndPassword(email, password)
    // .then((user) => {
      axios.get('http://localhost:8080/profile/' + email + '/')
        .then((user) => {
          loginSucess(dispatch, user);
          Actions.main();
        })
        .catch((err) => console.log('fail', err))
    // })
    // .catch((err) => {
    //   console.log(err);
    //   loginFail(dispatch)
    // });
  }
}

export function loginFail(dispatch) {
  return dispatch({ type: LOGIN_ERROR });
}

export function loginSucess(dispatch, request) {
  return dispatch({
    type: LOGIN,
    payload: request
  })
}

export function signUpAction(values) {
  const { email, password } = values;
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        const request = axios.post(`http://localhost:8080/profile/`,{ values: values });
        loginSucess(dispatch, request);
        Actions.main();
      })
      .catch((err) => {
        loginFail(dispatch)
      });
  }
}

export function logItOut(dispatch){
  return dispatch({
    type: LOGOUT
  });
}

export function logoutAction() {
  return (dispatch) => {
    firebase.auth().signOut();
    logItOut(dispatch)
  }
}
