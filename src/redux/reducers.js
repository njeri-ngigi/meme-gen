import ACTIONS from './actions';
import { logoUrl } from '../utils/constants';

const defaultState = {
  url: logoUrl
}

const MemesReducer = (state = defaultState, action) => {
  switch(action.type) {
    case ACTIONS.Types.SET_URL:
      return { ...state, url: action.url }

    default:
      return state;
  }
}

export default MemesReducer;
