import { GET_LOCATION } from '../actions/action_getLocation';



export default function(state = [], action) {

  switch (action.type) {
    case GET_LOCATION:
      return action.payload.data.results[2].formatted_address
    default:
      return state;
  }
}
