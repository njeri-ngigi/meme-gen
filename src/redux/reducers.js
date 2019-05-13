import ACTIONS from './actions';
import { logoUrl } from '../utils/constants';

const defaultState = {
  url: { url: logoUrl, name: 'Logo'},
  images: [],
  isLoading: false,
  errors: false,
  next: false
}

const MemesReducer = (state = defaultState, action) => {
  const { url, images, errors, isLoading, next } = action;
  switch(action.type) {
    case ACTIONS.Types.SET_URL:
      return { ...state, url }

    case ACTIONS.Types.SET_IMAGES:
      return { ...state, images, isLoading, next }

    case ACTIONS.Types.UPDATE_IMAGES:
      console.log("first", state.images)
      console.log("second", images)
      state.images.push(images)
      console.log("third", state.images)
      return { ...state, next }

    case ACTIONS.Types.SET_ERRORS:
      return { ...state, errors, isLoading }

    case ACTIONS.Types.SET_LOADING:
      return { ...state, isLoading }

    default:
      return state;
  }
}

export default MemesReducer;
