import { UPDATE_SUCCESS, UPDATE_FAIL, CHANGE_EDITED, CHANGE_PROFILE } from '../actions/action_updateInfo.js'
import { DELETE_ACCOUNT } from '../actions/action_deleteAccount.js'
import { LOGIN, LOGOUT, LOGIN_ERROR, LOGIN_ACTION } from '../actions/action_login.js';

const INITIAL_STATE = {
  loggedIn: false,
  data: {},
  temp: {},
  message: '',
  edited: false
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_ACTION:
      return { ...state, message: '' };
    case LOGIN:
      return { ...state, loggedIn: true, data: action.payload.data, temp: action.payload.data};
    case LOGOUT:
      return { ...state, loggedIn: false, message: '' };
    case LOGIN_ERROR:
      return { ...state, message: "Failed to authenticate" };
    case UPDATE_SUCCESS:
      return { ...state, data: action.payload.data, temp: action.payload.data, message: 'Profile saved and updated!', edited: true };
    case UPDATE_FAIL:
      return { ...state, message: 'Failed to save.'};
    case CHANGE_EDITED:
      return { ...state, edited: false }
    case DELETE_ACCOUNT:
      return INITIAL_STATE;
    case CHANGE_PROFILE:
      return { ...state, temp[action.prop] = value }
    default:
      return state;
  }
}
