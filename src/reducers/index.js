import { combineReducers } from 'redux';
import feedReducer  from './reducer_feed';
import gtkyKEY from './reducer_gtky';
import Login from './reducer_login_logout';
import currentLocation from './reducer_location';
import popup from './reducer_popup';
import activated from './activateReducer'


const rootReducer = combineReducers({
  appActivated: activated,
  profiles: feedReducer,
  gtkyKEY: gtkyKEY,
  login: Login,
  currentLocation: currentLocation,
  popup: popup
});

export default rootReducer;
