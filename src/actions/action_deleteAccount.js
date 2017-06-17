export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';
import axios from 'axios';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';



export function deleteAccount(id) {
  const user = firebase.auth().currentUser;
  user.delete()
    .then(() => Actions.auth());
  const request = axios.delete('http://localhost:8080/profile/' + id);

  return {
    type: DELETE_ACCOUNT,
    payload: request
  }
}
